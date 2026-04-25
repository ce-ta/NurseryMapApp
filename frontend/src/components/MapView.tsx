import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { getNurseryList } from '../services/mapview'

const nurseries = [
  {
    id: 1,
    name: "駒場保育園",
    lat: 35.6565735,
    lng: 139.6867123,
  },
  {
    id: 2,
    name: "菅刈保育園",
    lat: 35.65018267,
    lng: 139.695026,
  },
]

export const MapView = () => {
  const data = getNurseryList();
  return (
    <MapContainer
      center={[35.6565735, 139.6867123]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* ピン表示 */}
      {nurseries.map((n) => (
        <Marker key={n.id} position={[n.lat, n.lng]}>
          <Popup>
            <div>
              <h3>{n.name}</h3>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}