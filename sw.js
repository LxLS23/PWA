//const offlinePage = '/offline.html';
const cacheName = 'offline-cache-v1';

const WC = ['/index.html', '/Pages/conocenos.html', '/Pages/oferta.html', '/offline.html', '/main.js']

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(
                    WC
                );
            })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate'){
        event.respondWith(
            fetch(event.request)
            .catch(() => {
                return caches.match(event.request);
            })
        )
    }
})