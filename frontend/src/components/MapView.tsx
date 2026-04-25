import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { getNurseryList, getCityBounds } from '../services/mapview'
import { useEffect, useState } from 'react'
import type { Nursery, Bounds } from "../type/type"
import LeftSidebar from "./LeftSidebar"

export const MapView = () => {
  const [nurseries, setNurseries] = useState<Nursery[]>([]);
  const [bound, setBound] = useState<Record<string, Bounds>>({})
  const japanBounds: Bounds = [
    [20.0, 122.0],
    [46.0, 154.0],
  ];
  const [selectedBounds, setSelectedBounds] =
    useState<Bounds | null>(null);

  function formatDateTime(iso: string): string {
    const date = new Date(iso);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}年${month}月${day}日 ${hours}時${minutes}分`;
  }

  function checkAvailability(availability: number | null): string {
    if (availability != null) {
      return `${availability} 人`;
    } else {
      return "空きなし";
    }
  }

  // function renderLinkIfAvailable(link: string, name: string) {
  //   if (link != null) {
  //     return <h3><a href={link} target="_blank">{name}</a></h3>
  //   } else {
  //     return <h3>{name}</h3>
  //   }
  // }

  // 仮関数
  function renderLinkIfAvailable(name: string) {
    return <h3><a href="https://catalog.data.metro.tokyo.lg.jp/survey" target="_blank">{name}</a></h3>
  }

  const FitBounds = ({ bounds }: { bounds: Bounds | null }) => {
    const map = useMap();

    useEffect(() => {
      if (bounds) {
        map.fitBounds(bounds);
      }
    }, [bounds, map]);

    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNurseryList();
      setNurseries(data);

      const bounds = await getCityBounds();
      setBound(bounds);
    }
    fetchData();
  }, []);

  return (
    <div className="map-wrapper">
      <LeftSidebar bound={bound} setSelectedBounds={setSelectedBounds} />
      <MapContainer
        center={[35.6565735, 139.6867123]}
        maxBounds={japanBounds}
        maxBoundsViscosity={1.0}
        zoom={15}
        style={{ height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds bounds={selectedBounds} />

        {nurseries.map((n) => (
          <Marker key={n.id} position={[n.lat, n.lng]}>
            <Popup offset={[0, -10]} className="tooltip">
              <div>
                {renderLinkIfAvailable(n.name)}
                <p>施設類型：{n.type}</p>
                <p><strong>空き状況</strong></p>
                <p>0歳児～2歳児：{checkAvailability(n.age0to2)}</p>
                <p>0歳児：{checkAvailability(n.age0)}</p>
                <p>1歳児：{checkAvailability(n.age1)}</p>
                <p>2歳児：{checkAvailability(n.age2)}</p>
                <p>3歳児：{checkAvailability(n.age3)}</p>
                <p>4歳児：{checkAvailability(n.age4)}</p>
                <p>5歳児：{checkAvailability(n.age5)}</p>
                <p>延長保育：{checkAvailability(n.extended)}</p>
                <p className="pointInTime">{formatDateTime(n.date)}時点</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}