import { useState } from 'react'
import type { Bounds } from 'leaflet';
import CityBounds from "./CityBounds"

const LeftSidebar = ({
    bound, setSelectedBounds
}: {
    bound: Record<string, Bounds>,
    setSelectedBounds: React.Dispatch<React.SetStateAction<[[number, number], [number, number]] | null>>
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <button className={`toggle-btn ${!isOpen && "closed"}`} onClick={toggle}>
                {isOpen ? "←" : "→"}
            </button>
            <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

                <div className="content">
                    <CityBounds bound={bound} setSelectedBounds={setSelectedBounds} />
                    <div className="input-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className="search-icon">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                        <input type="text" placeholder="住所を入力" />
                        <div className="rage-wrapper">
                            <span>検索範囲（半径）：　</span>
                            <select className="search-range">
                                <option value="500">500m</option>
                                <option value="1000">1km</option>
                                <option value="2000">2km</option>
                                <option value="5000">5km</option>
                            </select>
                        </div>
                    </div>
                    <div className="search-btn-wrapper">
                        <button className="search-btn">検索</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSidebar