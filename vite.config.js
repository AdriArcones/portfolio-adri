import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'filter-network-logs',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const info = server.config.logger.info;
          const address = server.httpServer.address();
          const protocol = server.config.server.https ? 'https' : 'http';

          const filteredIPs = ['192.168.1.42']; // ← tu IP deseada

          info(`\n  ➜  Local:   ${protocol}://localhost:${address.port}/`);
          filteredIPs.forEach(ip => {
            info(`  ➜  Network: ${protocol}://${ip}:${address.port}/`);
          });
        });
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: ['http://localhost:5173', 'http://192.168.1.42:5173']
  }
});
