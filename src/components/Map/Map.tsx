import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import "../../utils/fix-map-icon";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[50.2657152, 18.9945008]} zoom={20}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
        <Marker position={[50.2657152, 18.9945008]}>
          <Popup>
            <h2>IT.focus</h2>
            <p>Firma programistyczna</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
