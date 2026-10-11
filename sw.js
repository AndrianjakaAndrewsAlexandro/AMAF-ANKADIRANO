const CACHE_NAME = "amaf-ankad-v3";
const urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./ministere.html",
    "./ministere.css",
    "./manifest.json",
    "./logo/logo.jpg",
    "./Images/icon-192.png",
    "./Images/icon-512.png"
];

// Installation de service worker
self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)).then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(key => key.startsWith("amaf-ankad-") && key !== CACHE_NAME).map(
                key => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

// Interception des requêtes pour el mode hors-ligne
self.addEventListener("fetch", event => {
    if(event.request.method !== "GET"){
        return;
    }

    const url = new URL(event.request.url);

    if(url.origin !== self.location.origin){
        return;
    }

    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
        })
    );
});