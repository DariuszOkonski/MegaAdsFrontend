import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[50.2657152, 18.9945008]} zoom={20}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
      </MapContainer>
    </div>
  );
};
