import location from './media/location.png'
import kirk_loc from './media/kirk_loc.png'
import buss from './media/buss.png'
import place from './media/place.png'
import wedding1 from './media/wedding1.png'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L, {divIcon, point, Icon} from "leaflet";

import "leaflet/dist/leaflet.css";

const parkering_barnehage = {
  lat: 59.2091682972795,
  lng: 9.528286709957444
};

const torsplass_location = {
  lat: 59.20644641759777,
  lng: 9.540839682527018
};

const parkering_idrettsbane = {
  lat: 59.211366875756255, 
  lng: 9.532464385973938
}

const parkering_bruket = {
  lat: 59.21038353975628, 
  lng: 9.524867560103475
}

const parkering_sluse = {
  lat: 59.212223105406736, 
  lng: 9.52187478531712
}

const kirke_location = {
  lat: 59.21406525380803, 
  lng: 9.52514986847851
}

const parkering_kirke = {
  lat: 59.214561813267856, 
  lng: 9.525431838505012
}

const parkering_skole = {
  lat: 59.21426094313128, 
  lng: 9.526822572016135
}

const parkering_butikk = {
  lat: 59.21535678258183, 
  lng: 9.525106856075737
}

const camp_location = {
  lat: 59.21406131912196, 
  lng: 9.516008813086774
}

const buss_location = {
  lat: 59.212938867656604, 
  lng: 9.522793482637724
}

const center = {
  lat: 59.21156637320142, 
  lng: 9.52951832386031
}


const buss_icon = new Icon({
  iconUrl: buss,
  iconSize: [38, 38]
})

const camp_icon = new Icon({
  iconUrl: place,
  iconSize: [38, 38]
})

const kirke_icon = new Icon({
  iconUrl: kirk_loc,
  iconSize: [38, 38]
});

const parkering_icon = new Icon({
  iconUrl: location,
  iconSize: [38, 38]
});

const torsplass_icon = new Icon({
  iconUrl: wedding1,
  iconSize: [38, 38]
});


function Maps() {
  return (
    <MapContainer
      center={center}
      zoom={13}
    >
    <Marker
      position={camp_location}
      icon={camp_icon}
    >
      <Popup>
        Skotfossvegen 292, 3720 (camp)
      </Popup>
    </Marker>
    <Marker
      position={buss_location}
      icon={buss_icon}
    >
      <Popup>
        Bussholdeplass, p6
      </Popup>
    </Marker>
    <Marker
      position={kirke_location}
      icon={kirke_icon}
    >
      <Popup>
        Kirkebakken 3, 3720 (Vielsen)
      </Popup>
    </Marker>
    <Marker
      position={parkering_kirke}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={parkering_butikk}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={parkering_skole}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={parkering_barnehage}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={parkering_sluse}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={parkering_idrettsbane}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={parkering_bruket}
      icon={parkering_icon}
    ></Marker>
    <Marker
      position={torsplass_location}
      icon={torsplass_icon}
    >
      <Popup>Tors plass (Bryllupsfesten)</Popup>
    </Marker>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />  
    </MapContainer>
  );
}

export default Maps;
