import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta línea define la ruta base con el nombre del repositorio para GitHub Pages
  base: '/vocacion-dominicana/',
})

