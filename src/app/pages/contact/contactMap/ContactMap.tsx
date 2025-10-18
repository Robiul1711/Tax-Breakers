"use client"
import {
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Helper component to fly to coords
const FlyToDistrict = ({ coords }:{coords: any}) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 13, { duration: 1.5 });
  }
  return null;
};

const ContactMap = () => {
  const [activeCoords, setActiveCoords] = useState(null);

  return (
      <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-[#E5E5E5]">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Smooth fly to matched district */}
          <FlyToDistrict coords={activeCoords} />
        </MapContainer>
      </div>
  );
};

export default ContactMap;