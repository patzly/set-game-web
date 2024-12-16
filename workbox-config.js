module.exports = {
    globDirectory: 'public/',
    globPatterns: ['**/*.{html,js,css,png,jpg,svg,json}'],
    swDest: 'public/sw.js',
    runtimeCaching: [
        {
            urlPattern: /\/api\//,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'api-cache',
                expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 86400
                }
            }
        },
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
                cacheName: 'image-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 604800
                }
            }
        }
    ],
    // Precache and route for specific resources (e.g., index.html)
    precacheAndRoute: [
        { url: '/', revision: '12345' },
        { url: '/index.html', revision: '12345' },
        // Weitere Dateien hier hinzufügen
    ]
};
