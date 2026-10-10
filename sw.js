const CACHE_NAME = "advAnkApp-v2";
const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/ministere.html",
    "/ministere.css",
    "/manifest.json"
];

// Installation de service worker
self.addEventListener("install", event => {
    event.waitUntil(cache.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

// Interception des requêtes pour el mode hors-ligne
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});