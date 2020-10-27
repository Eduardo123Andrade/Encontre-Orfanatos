import L from 'leaflet';
import mapMarkerImg from './../assets/images/Map-Mark.svg'

export const mapIcon = L.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })
  