self.addEventListener("install", (event) => {
    console.log("Service Worker installing...");
    event.waitUntil(
        caches.open("my-cache-v1").then((cache) => {
            console.log("Caching resources...");
            return cache.addAll([
                "/",
                "index.html",
                "images/favicon.png",
                "stylesheets/main.css",
                "javascripts/vue.js"
            ]);
        }).then(() => {
            console.log("Service Worker: Install completed!");
        }).catch((err) => {
            console.error("Service Worker install failed:", err);
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activating...");
});

self.addEventListener("fetch", (event) => {
    console.log("Fetch event for:", event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log("Serving from cache:", event.request.url);
                return response;
            }
            console.log("Fetching from network:", event.request.url);
            return fetch(event.request);
        })
    );
});
