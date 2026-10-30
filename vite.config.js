import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta línea asegura que las rutas de los archivos sean relativas,
  // permitiendo que el proyecto funcione en GitHub Pages, Vercel o localmente sin errores
  base: './',
})

