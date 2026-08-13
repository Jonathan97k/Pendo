// Service Worker for Pendo's Treats PWA
const CACHE_NAME = 'pendos-treats-v1';
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
  '/favicon.ico',
  // Add any other critical assets here
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
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/offline.html');
      })
    );
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found, otherwise fetch from network
        return cachedResponse || fetch(event.request).then((networkResponse) => {
          // Cache successful network responses
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
      .catch(() => {
        // If both cache and network fail, try to return offline page for navigations
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
        // For other requests, just return the error
        throw new Error('Network request failed and not in cache');
      })
  );
});