import type { Bounds } from "../type/type"

const CityBounds = ({
    bound, setSelectedBounds
}: {
    bound: Record<string, Bounds>,
    setSelectedBounds: React.Dispatch<React.SetStateAction<[[number, number], [number, number]] | null>>
}) => {
    return (
        <>
            <span>市区町村：　</span>
            <select
                className="map-select"
                onChange={(e) => {
                    const city = e.target.value;
                    setSelectedBounds(bound[city]);
                }}
            >
                <option value="">選択してください</option>
                {Object.keys(bound).map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </>
    )
}

export default CityBounds