import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
        // Cette ligne autorise ton nouveau nom de domaine
        allowedHosts: ["app.mon-projet.com"]
    }
})