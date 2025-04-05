import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-add-job-project",
  server:{
    port:3000,
    proxy:{
      '/api':{
        target: "http://localhost:5000/posts",
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/, 'https://amin2500.github.io/react-add-job-project/'),
      },
    },
  },
})
