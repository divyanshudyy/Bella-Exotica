import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";

const INDIA_COORDS = { lat: 23.259933, lng: 77.412613 };
const EXPORT_DATA = [
  { lat: 38.5, lng: -98.0, country: "USA", color: "#4A90E2" },
  { lat: 53.483959, lng: -2.244644, country: "UK", color: "#50E3C2" },
  { lat: 35.652832, lng: 139.839478, country: "Japan", color: "#F5A623" },
  { lat: -23.700552, lng: 133.882675, country: "Australia", color: "#E94E77" },
  { lat: -1.2921, lng: 36.8219, country: "Kenya", color: "#20B2AA" },
  { lat: 56.1304, lng: -106.3468, country: "Canada", color: "#FF8C00" },
  { lat: 61.524, lng: 105.3188, country: "Russia", color: "#C71585" },
  { lat: -30.5595, lng: 22.9375, country: "South Africa", color: "#FFDAB9" },
  { lat: 39.0742, lng: 21.8243, country: "Greece", color: "#ADFF2F" },
  { lat: 23.4241, lng: 53.8478, country: "UAE", color: "#BA55D3" },
];

function latLngToXYZ(lat, lng, radius = 4) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

function getCurvePoints(
  start,
  end,
  segments = 50,
  minHeight = 0.5,
  maxHeight = 3.5
) {
  const points = [];
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const dz = end[2] - start[2];
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const height = THREE.MathUtils.clamp(dist * 0.3, minHeight, maxHeight);

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    let x = start[0] * (1 - t) + end[0] * t;
    let y = start[1] * (1 - t) + end[1] * t;
    let z = start[2] * (1 - t) + end[2] * t;

    const len = Math.sqrt(x * x + y * y + z * z);
    const nx = x / len;
    const ny = y / len;
    const nz = z / len;
    const arcFactor = Math.sin(Math.PI * t);
    x += nx * height * arcFactor;
    y += ny * height * arcFactor;
    z += nz * height * arcFactor;
    points.push([x, y, z]);
  }
  return points;
}

function AnimatedArc({ points, color, active, duration = 2, delay = 0 }) {
  const lineRef = useRef();
  const [progress, setProgress] = useState(0);
  const startTime = useRef(null);

  useFrame((state) => {
    if (!active) return;
    if (!startTime.current) startTime.current = state.clock.getElapsedTime();
    const elapsed = state.clock.getElapsedTime() - startTime.current - delay;
    setProgress(
      elapsed > 0 ? (elapsed < duration ? elapsed / duration : 1) : 0
    );
  });

  const visiblePoints = useMemo(() => {
    const count = Math.floor(points.length * progress);
    return points.slice(0, Math.max(2, count));
  }, [progress, points]);

  return (
    <Line
      ref={lineRef}
      points={visiblePoints}
      color={color}
      lineWidth={2}
      dashed
      dashSize={0.05}
      gapSize={0.1}
      transparent
      opacity={1}
    />
  );
}

function GlobeGroup({ active, preActive, arcs, markers }) {
  const groupRef = useRef();
  useFrame(() => {
    if (groupRef.current && preActive) {
      // constant rotation speed
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {/* Globe */}
      <mesh>
        <sphereGeometry args={[4, 128, 128]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            "https://unpkg.com/three-globe/example/img/earth-night.jpg"
          )}
          bumpMap={new THREE.TextureLoader().load(
            "https://unpkg.com/three-globe/example/img/earth-topology.png"
          )}
          bumpScale={2.5}
          metalness={0.4}
          roughness={0.55}
        />
      </mesh>

      {/* India marker */}
      <mesh position={latLngToXYZ(INDIA_COORDS.lat, INDIA_COORDS.lng, 4.05)}>
        <sphereGeometry args={[0.07, 10, 10]} />
        <meshStandardMaterial color="#FF0000" />
        <Html distanceFactor={8}>
          <div
            style={{
              color: "#fff",
              background: "rgba(26,31,54,0.85)",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            India
          </div>
        </Html>
      </mesh>

      {/* Other markers */}
      {markers.map((m, idx) => (
        <mesh key={idx} position={m.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#00FFFF" />
          <Html distanceFactor={10}>
            <div
              style={{
                color: "#fff",
                // background: "rgba(26,31,54)",
                // padding: "2px 6px",
                // borderRadius: "4px",
                fontSize: "20px",
                fontWeight: 100,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {m.country}
            </div>
          </Html>
        </mesh>
      ))}

      {arcs.map((arc, idx) => (
        <AnimatedArc
          key={idx}
          points={arc.points}
          color={arc.color}
          active={active}
          delay={idx * 0.1} // each arc starts 0.3s after the previous one
        />
      ))}
    </group>
  );
}

export default function GlobeViz() {
  const [active, setActive] = useState(false);
  const [preActive, setPreActive] = useState(false);
  const sectionRef = useRef();

  const markers = useMemo(
    () =>
      EXPORT_DATA.map((d) => {
        const [x, y, z] = latLngToXYZ(d.lat, d.lng, 4.05);
        return { ...d, position: [x, y, z] };
      }),
    []
  );

  const arcs = useMemo(() => {
    const indiaPos = latLngToXYZ(INDIA_COORDS.lat, INDIA_COORDS.lng, 4.05);
    return EXPORT_DATA.map((d) => {
      const destPos = latLngToXYZ(d.lat, d.lng, 4.05);
      return { color: d.color, points: getCurvePoints(indiaPos, destPos) };
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true); // arc animation
          setPreActive(true); // rotation pre-start
        } else {
          setActive(false);
          setPreActive(false); // stop rotation
        }
      },
      {
        threshold: 0.3,
        rootMargin: "200px 0px", // start rotation before view
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const indiaPos = latLngToXYZ(INDIA_COORDS.lat, INDIA_COORDS.lng, 5.05);

  return (
    <section ref={sectionRef} className="wrapper-section">
      <div className="canvas-wrapper ">
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
            overflow: "hidden",
            cursor: "grab",
          }}
          camera={{
            orthographic: true,
            zoom: 2.2,
            position: [indiaPos[0] * 2, indiaPos[1] * 2, indiaPos[2] * 2],
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={9} />
          <directionalLight position={[10, 10, 10]} intensity={4} />

          {/* Background */}
          <mesh>
            <sphereGeometry args={[50, 32, 32]} />
            <meshBasicMaterial color="#1A1F36" side={THREE.BackSide} />
          </mesh>

          <GlobeGroup
            active={active}
            preActive={preActive}
            arcs={arcs}
            markers={markers}
          />

          <OrbitControls
            autoRotate={false}
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
        </Canvas>
      </div>
    </section>
  );
}
