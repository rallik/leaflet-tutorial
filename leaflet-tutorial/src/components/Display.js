import React, {useState} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, WMSTileLayer, Marker, Popup } from 'react-leaflet';
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
  
  let nexrad = {
    url: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
    params: {
      layers: 'nexrad-n0r-900913',
      format: 'image/png',
      transparent: true,
      attribution: "Weather data © 2012 IEM Nexrad"
    },
    opacity: 0.5,
};

  const { zoom, lat, long, scrollZoom } = state;
  const position = [lat, long];

  console.log(<TileLayer {...nexrad} />)
  console.log(<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />);
  
  return (

    <MapContainer className='map' center={position} zoom={zoom} scrollWheelZoom={scrollZoom}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <WMSTileLayer url={nexrad.url} params={nexrad.params} opacity={nexrad.opacity}/>
          <Marker position={position} icon={myIcon}>
            <Popup>
              Popup
            </Popup>
          </Marker>
      </MapContainer>
  );
}

export default Display
