import location from './media/location.png'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L, {divIcon, point} from "leaflet";

import "leaflet/dist/leaflet.css";

const containerStyle = {
  overflow: 'hidden',
  height: '200px',
};

const center = {
  lat: 59.20638906716275,
  lng: 9.540730474522007
};

const parkering_barnehage = {
  lat: 59.2091682972795,
  lng: 9.528286709957444
};


function Maps() {
  return (
    <MapContainer
      center={center}
      zoom={13}
    >
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />  
    </MapContainer>
  );
}

export default Maps;
