const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Meine PWA App',
    themeColor: '#42b983', // Farbe der Statusleiste / des Themes
    manifestOptions: {
      short_name: 'MeinePWA',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/', // Start-URL, wenn die App als PWA gestartet wird
      icons: [
        {
          src: 'img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workboxPluginMode: 'GenerateSW', // Automatisch Service Worker generieren
    workboxOptions: {
      clientsClaim: true, // Clients übernehmen sofort den SW
      skipWaiting: true, // Neuer Service Worker aktiviert sofort
      runtimeCaching: [
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|ico)/, // Bilder offline cachen
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Tage
            },
          },
        },
        {
          urlPattern: /.*\.(?:js|css|html)/, // Static Assets offline cachen
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
        {
          urlPattern: /^\/index\.html$/, // Cache die index.html (wichtig für offline)
          handler: 'CacheFirst', // Verwende CacheFirst, um sicherzustellen, dass HTML auch offline verfügbar ist
          options: {
            cacheName: 'html-cache',
          },
        },
        {
          urlPattern: /^https:\/\/your-api-url\/.*/, // API-Daten cachen (Beispiel)
          handler: 'NetworkFirst', // Versucht erst das Netzwerk
          options: {
            cacheName: 'api-cache',
            networkTimeoutSeconds: 10,
          },
        },
      ],
    },
  },
})
