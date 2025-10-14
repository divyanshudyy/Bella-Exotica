import React, { useState, useCallback, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import { Search, Home, Plus, Minus } from "lucide-react";

// --- Constants ---
const GANDHIDHAM_COORDINATES = [23.0769, 70.1337];
const INITIAL_ZOOM_LEVEL = 13;

const TILE_LAYER_URL =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png";
const TILE_LAYER_ATTRIBUTION = "© OpenStreetMap contributors © CARTO";

const HOME_LOCATION = {
  id: "home-base",
  name: "Our Headquarters",
  position: { lat: 23.0769, lng: 70.1337 },
  type: "home",
};

const STORE_LOCATIONS = [
  {
    id: "store-1",
    name: "Gourmet Foods",
    position: { lat: 23.085, lng: 70.135 },
    type: "store",
  },
  {
    id: "store-2",
    name: "Fresh Produce Market",
    position: { lat: 23.07, lng: 70.14 },
    type: "store",
  },
  {
    id: "store-3",
    name: "Organic Origins",
    position: { lat: 23.065, lng: 70.12 },
    type: "store",
  },
  {
    id: "store-4",
    name: "Kandla Port Distributors",
    position: { lat: 23.028, lng: 70.218 },
    type: "store",
  },
  {
    id: "store-5",
    name: "Adipur Central Grocers",
    position: { lat: 23.081, lng: 70.068 },
    type: "store",
  },
];

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
    iconSize: iconSize,
    iconAnchor: iconAnchor,
  });
};

// --- Main Component ---
const Map = () => {
  const [map, setMap] = useState(null);
  const allLocations = [HOME_LOCATION, ...STORE_LOCATIONS];

  const handleRecenter = useCallback(() => {
    if (map) {
      map.flyTo(GANDHIDHAM_COORDINATES, INITIAL_ZOOM_LEVEL);
    }
  }, [map]);

  const handleZoomIn = useCallback(() => {
    map?.zoomIn();
  }, [map]);

  const handleZoomOut = useCallback(() => {
    map?.zoomOut();
  }, [map]);

  return (
    <div className="w-full h-full relative ">
      <MapContainer
        center={GANDHIDHAM_COORDINATES}
        zoom={INITIAL_ZOOM_LEVEL}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
      >
        <MapController onMapReady={setMap} />
        <TileLayer url={TILE_LAYER_URL} />

        {allLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.position.lat, location.position.lng]}
            icon={createCustomIcon(location)}
          />
        ))}
      </MapContainer>

      {/* Map Controls */}
      <div className="absolute top-0 left-0 right-0 p-4  pointer-events-none">
        <div className="flex justify-between items-start w-full max-w-7xl mx-auto">
          {/* Left Controls */}
          <div className="pointer-events-auto">
            <header className="absolute top-0 left-0  p-4 sm:p-6 lg:p-2 ">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 backdrop-blur-sm px-4 py-2 rounded-full shadow">
                Ajapar, Kutch, Gujarat
              </h1>
            </header>
          </div>

          {/* Right Controls */}
          <div className="flex flex-col space-y-2 pointer-events-auto">
            <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                className="p-3 hover:bg-gray-700"
              >
                <Plus className="w-6 h-6" />
              </button>
              <div className="w-full h-px bg-gray-700"></div>
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                className="p-3 hover:bg-gray-700"
              >
                <Minus className="w-6 h-6" />
              </button>
            </div>
            <button
              onClick={handleRecenter}
              title="Recenter Map"
              className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-1 right-2  bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-700">
        {TILE_LAYER_ATTRIBUTION.replace(/<a[^>]*>|<\/a>/g, "")}
      </div>
    </div>
  );
};

export default Map;
