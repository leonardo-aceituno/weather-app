import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'https://leonardo-aceituno.github.io/weather-app/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-app/'
    : '/'
})
