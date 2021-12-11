import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import icon from '../../../assets/img/icon-map.svg';

const ESCAPE_ROOM_MAP_COORDS = [59.968322, 30.317359];
const MAP_ZOOM = 17;

function LeafletMap() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current).setView(ESCAPE_ROOM_MAP_COORDS, MAP_ZOOM)

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance)

      const myIcon = leaflet.icon({
        iconUrl: icon,
        iconAnchor: ESCAPE_ROOM_MAP_COORDS,
      });

      leaflet.marker(ESCAPE_ROOM_MAP_COORDS, { icon: myIcon }).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map]);

  return (
    <div style={{ height: '336px', width: '649px' }} ref={mapRef}></div>
  );
}

export default LeafletMap;
