import React, {useState} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
  
  const { zoom, lat, long, scrollZoom } = state;
  const position = [lat, long];

  console.log(<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />);
  
  return (

    <MapContainer className='map' center={position} zoom={zoom} scrollWheelZoom={scrollZoom}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={myIcon}>
            <Popup>
              Popup
            </Popup>
          </Marker>
      </MapContainer>
  );
}

export default Display
