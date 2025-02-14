import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MapsApp from './MapsApp.tsx'

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = '';


if( !navigator.geolocation ){
  alert('Tu navegador no tiene opción de Geolocation')
  throw new Error('Tu navegador no tiene opción de Geolocation')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
