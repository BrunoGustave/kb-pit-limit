const CACHE = 'kbpit-muvfzguy';
const FILES = ["./","./apple-touch-icon.png","./assets/compute.worker-U1J1PA-j.js","./assets/index-a_KCzxhH.css","./assets/index-BkFz3NyT.js","./assets/web-BtyhW6Yx.js","./assets/web-Ctz3E9x3.js","./assets/web-DCnNlxcj.js","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true, ignoreVary: true }).then((r) => r || fetch(e.request).catch(() => (e.request.mode === 'navigate' ? caches.match('./index.html', { ignoreVary: true }) : Response.error()))));
});
