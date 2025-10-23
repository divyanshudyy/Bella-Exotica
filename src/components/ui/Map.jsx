import React, { useState, useCallback, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import { Home, Plus, Minus } from "lucide-react";
import { MAP_LOCATIONS, MAP_CONFIG } from "../../data/globalConstants";

// --- Map Controller ---
const MapController = ({ onMapReady }) => {
  const map = useMap();
  useEffect(() => {
    onMapReady(map);
  }, [map, onMapReady]);
  return null;
};

// --- Custom Icon Creation ---
const createCustomIcon = (location) => {
  let iconHtml;
  let iconSize;
  let iconAnchor;

  if (location.type === "home") {
    iconHtml = ReactDOMServer.renderToString(
      <div className="relative flex items-center justify-center cursor-pointer">
        <div className="absolute w-16 h-16 bg-gray-900/20 rounded-full animate-pulse"></div>
        <div className="relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg">
          <Home className="w-6 h-6" />
        </div>
      </div>
    );
    iconSize = [64, 64];
    iconAnchor = [32, 32];
  } else {
    iconHtml = ReactDOMServer.renderToString(
      <div className="bg-white rounded-full px-4 py-2 text-gray-800 font-semibold shadow-lg text-sm cursor-pointer hover:bg-gray-900 hover:text-white transition-colors duration-200">
        {location.name}
      </div>
    );
    iconSize = [location.name.length * 9 + 32, 38];
    iconAnchor = [iconSize[0] / 2, iconSize[1]];
  }

  return L.divIcon({
    html: iconHtml,
    className: "bg-transparent border-0",
    iconSize,
    iconAnchor,
  });
};

// --- Main Component ---
const Map = () => {
  const [map, setMap] = useState(null);

  const handleRecenter = useCallback(() => {
    if (map) {
      map.flyTo(MAP_CONFIG.centerCoordinates, MAP_CONFIG.initialZoomLevel);
    }
  }, [map]);

  const handleZoomIn = useCallback(() => {
    map?.zoomIn();
  }, [map]);

  const handleZoomOut = useCallback(() => {
    map?.zoomOut();
  }, [map]);

  return (
    <div className="w-full h-full relative">
      {/* Map */}
      <MapContainer
        center={MAP_CONFIG.centerCoordinates}
        zoom={MAP_CONFIG.initialZoomLevel}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        className="w-full h-full relative z-0"
        dragging={window.innerWidth >= 640} // disable dragging on mobile
        doubleClickZoom={window.innerWidth >= 640}
        touchZoom={window.innerWidth >= 640}
      >
        <MapController onMapReady={setMap} />
        <TileLayer url={MAP_CONFIG.tileLayerUrl} />
        {MAP_LOCATIONS.map((location) => (
          <Marker
            key={location.id}
            position={[location.position.lat, location.position.lng]}
            icon={createCustomIcon(location)}
          />
        ))}
      </MapContainer>

      {/* Controls Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="flex justify-between items-start w-full max-w-7xl mx-auto p-4 pointer-events-auto">
          {/* Left Header */}
          <header className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow text-gray-800 text-xl sm:text-2xl font-semibold">
            {MAP_CONFIG.headerText}
          </header>

          {/* Right Controls */}
          <div className="flex flex-col space-y-2">
            {/* Zoom Buttons */}
            <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
              <button onClick={handleZoomIn} className="p-3 hover:bg-gray-700">
                <Plus className="w-6 h-6" />
              </button>
              <div className="w-full h-px bg-gray-700"></div>
              <button onClick={handleZoomOut} className="p-3 hover:bg-gray-700">
                <Minus className="w-6 h-6" />
              </button>
            </div>

            {/* Recenter */}
            <button
              onClick={handleRecenter}
              className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-1 right-2 bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-700 z-50">
        {MAP_CONFIG.tileAttribution.replace(/<a[^>]*>|<\/a>/g, "")}
      </div>
    </div>
  );
};

export default Map;
