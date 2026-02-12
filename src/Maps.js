/*


*/

import { LoadScript, GoogleMap, Marker} from '@react-google-maps/api';

const containerStyle = {
  overflow: 'hidden',
  height: '200px',
};

const center = {
  lat: 40.7128, // New York example
  lng: -74.0060
};

function Maps() {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps;