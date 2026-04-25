import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import 'leaflet/dist/leaflet.css'
import { MapView } from './components/MapView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapView />
  </StrictMode>,
)
