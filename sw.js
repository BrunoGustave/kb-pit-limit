const CACHE = 'kbpit-muvi3x7e';
const FILES = ["./","./apple-touch-icon.png","./assets/compute.worker-U1J1PA-j.js","./assets/index-BBb-beid.js","./assets/index-BZobutY-.css","./assets/web-BJb5Cefg.js","./assets/web-TfA49q5h.js","./assets/web-XO5IANDV.js","./avatar.png","./favicon.png","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true, ignoreVary: true }).then((r) => r || fetch(e.request).catch(() => (e.request.mode === 'navigate' ? caches.match('./index.html', { ignoreVary: true }) : Response.error()))));
});
