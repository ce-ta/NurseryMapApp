import express from "express"
import cors from "cors"
import data from "./data/data.json"
import { convertRows } from "./services"
import { Nurseries } from "./type"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/nurseries", (req, res) => {
    const result = convertRows(Nurseries, data.records)
    res.json(result)
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})