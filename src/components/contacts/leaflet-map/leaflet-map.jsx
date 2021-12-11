import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const ESCAPE_ROOM_MAP_COORDS = [59.968322, 30.317359];
const MAP_ZOOM = 17;

const LeafletMap = () => (
  <MapContainer
    center={ESCAPE_ROOM_MAP_COORDS}
    zoom={MAP_ZOOM}
    zoomControl={false}
    style={{ height: '336px', width: '649px' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={ESCAPE_ROOM_MAP_COORDS}>
    </Marker>
  </MapContainer>
)

export default LeafletMap;
