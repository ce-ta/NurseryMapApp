const mapRowToObject = (fields: string[], row: any[]) => {
    return Object.fromEntries(
        fields.map((key, index) => [key, row[index]])
    )
}

export const convertRows = (fields: string[], rows: any[][]) => {
    return rows.map((row) => mapRowToObject(fields, row))
}