import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
})

export async function getNurseryList() {
    try {
        const res = await api.get("/nurseries")
        return res.data
    } catch(e) {
        console.error("errror: ", e)
    }
}