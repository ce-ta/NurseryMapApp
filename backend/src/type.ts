export const Nurseries = [
    "_id",
    "利用調整日",
    "保育施設名",
    "施設類型",
    "0歳・1歳・2歳",
    "0歳児",
    "1歳児",
    "2歳児",
    "3歳児",
    "4歳児",
    "5歳児",
    "延長保育",
    "緯度",
    "経度",
]

type NurseryRaw = {
    [K in (typeof Nurseries)[number]]: string | number | null
}