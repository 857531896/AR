import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr'],
  plugins: [react(), mkcert()],
  base: './',
  server: {
    host: true, // 这将允许服务器监听所有可用的网络接口，包括局域网IP
    port: 5173, // 您可以指定一个端口，例如 5173
  },
})
