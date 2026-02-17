/*


*/

import { LoadScript, GoogleMap, Marker} from '@react-google-maps/api';

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
    <LoadScript googleMapsApiKey="AIzaSyAh-XjOCgKaqt5hc2whn0NYT2VfgeyDeVI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
      <Marker position={center}></Marker>
      <Marker position={parkering_barnehage}></Marker>
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps;