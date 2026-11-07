// Service Worker for Pendo's Treats PWA
const CACHE_NAME = 'pendos-treats-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/images/logo.png',
  '/images/logo-192.png',
  '/images/food-1.webp',
  '/images/food-2.webp',
  '/images/food-3.webp',
  '/images/food-4.webp',
  '/images/food-5.webp',
  '/images/chapati-eggs-pendo.webp',
  '/favicon.ico',
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch assets from cache, falling back to network
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/offline.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((networkResponse) => {
        if (networkResponse.ok) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      throw new Error('Network request failed and not in cache');
    })
  );
});
