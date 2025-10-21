import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { GLOBE } from "../../../data/b2bData";

// Converts lat/lng to XYZ coordinates
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

function AnimatedArc({ points, active, duration = 2, delay = 0 }) {
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
      color="#fff"
      lineWidth={2}
      dashed
      dashSize={0.05}
      gapSize={0.1}
      transparent
      opacity={1}
    />
  );
}

// Hook for responsive text scaling
function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function GlobeGroup({ active, preActive, arcs, markers }) {
  const groupRef = useRef();
  const width = useWindowSize();

  const textSize = width < 640 ? 18 : width < 1024 ? 20 : 25; // responsive sizes

  useFrame(() => {
    if (groupRef.current && preActive) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {/* Globe */}
      <mesh>
        <sphereGeometry args={[4, 128, 128]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(`${GLOBE.globeTextures.map}`)}
          bumpMap={new THREE.TextureLoader().load(
            `${GLOBE.globeTextures.bumpMap}`
          )}
          bumpScale={2.5}
          metalness={0.4}
          roughness={0.55}
        />
      </mesh>

      {/* India marker */}
      <mesh
        position={latLngToXYZ(
          GLOBE.indiaCoords.lat,
          GLOBE.indiaCoords.lng,
          4.05
        )}
      >
        <sphereGeometry args={[0.07, 10, 10]} />
        <meshStandardMaterial color="red" />
        <Html distanceFactor={20}>
          <div
            style={{
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: `${textSize}px`,
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
                fontSize: `${textSize}px`,
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
          delay={idx * 0.1}
        />
      ))}
    </group>
  );
}

export default function Globe() {
  const [active, setActive] = useState(false);
  const [preActive, setPreActive] = useState(false);
  const sectionRef = useRef();

  const markers = useMemo(
    () =>
      GLOBE.exportData.map((d) => {
        const [x, y, z] = latLngToXYZ(d.lat, d.lng, 4.05);
        return { ...d, position: [x, y, z] };
      }),
    []
  );

  const arcs = useMemo(() => {
    const indiaPos = latLngToXYZ(
      GLOBE.indiaCoords.lat,
      GLOBE.indiaCoords.lng,
      4.05
    );
    return GLOBE.exportData.map((d) => {
      const destPos = latLngToXYZ(d.lat, d.lng, 4.05);
      return { color: d.color, points: getCurvePoints(indiaPos, destPos) };
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          setPreActive(true);
        } else {
          setActive(false);
          setPreActive(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "200px 0px",
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const indiaPos = latLngToXYZ(
    GLOBE.indiaCoords.lat,
    GLOBE.indiaCoords.lng,
    5.05
  );

  return (
    <section ref={sectionRef} className="wrapper-section">
      <div className="canvas-wrapper ">
        <Canvas
          gl={{ alpha: true, antialias: true }}
          camera={{
            orthographic: true,
            zoom: 2.5,
            position: [indiaPos[0] * 2, indiaPos[1] * 2, indiaPos[2] * 3],
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={9} />
          <directionalLight position={[10, 10, 10]} intensity={4} />

          {/* Background */}
          <mesh>
            <sphereGeometry args={[50, 32, 32]} />
            <meshBasicMaterial color="#0A1B3D" side={THREE.BackSide} />
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
