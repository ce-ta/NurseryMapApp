export const Nurseries = [
    "id",
    "date",
    "name",
    "type",
    "age0to2",
    "age0",
    "age1",
    "age2",
    "age3",
    "age4",
    "age5",
    "extended",
    "lat",
    "lng",
]

type NurseryRaw = {
    [K in (typeof Nurseries)[number]]: string | number | null
}

export type Bounds = [[number, number], [number, number]];