import React, {useState} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon1 from '../assets/map-pin.png'



const Display = () => {
  const [state, setState] = useState({
    lat: 42.3601,
    long: -71.0589,
    zoom: 15,
    scrollZoom: false
  });

  let myIcon = L.icon({
    iconUrl: icon1,
    iconSize: [50, 68],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const calcBounds = (c_lat, c_long) => {
    const toplat = 42.5792;
    // const bottomlat = c_lat - (toplat - c_lat);
    const bottomlat = 42.1410;
    const leftlong = -71.2209;
    // const rightlong = c_long + (c_long - leftlong)
    const rightlong = -70.8969;
    
    return {toplat, bottomlat, leftlong, rightlong};
  }
  
  const { zoom, lat, long, scrollZoom } = state;
  const position = [lat, long];

  const { toplat, rightlong, bottomlat, leftlong } = calcBounds(lat, long);
  console.log(toplat, rightlong, bottomlat, leftlong)

  // const bounds = [
  //   [rightlong, bottomlat],
  //   [leftlong, toplat]
  // ]
  const rect = [
    [-71.2209, 42.1410],
    [-70.8969, 42.5792]
  ];
  const greenOptions = { color: 'green', fillColor: 'green' } 
  console.log(        <Rectangle bounds={rect} pathOptions={greenOptions} />
    );
  
  return (

    <MapContainer className='map' center={position} zoom={zoom} scrollWheelZoom={scrollZoom}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Rectangle bounds={rect} pathOptions={{ color: '#00ff00'}}></Rectangle>

          {/* <Marker position={position} icon={myIcon}>
            <Popup>
              Popup
            </Popup>
          </Marker> */}
      
    </MapContainer>
  );
}

export default Display
