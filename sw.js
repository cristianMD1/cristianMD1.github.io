self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/cristianMD1.github.io/',
      '/cristianMD1.github.io/index.html',
      '/cristianMD1.github.io/index.js',
      '/cristianMD1.github.io/style.css',
      '/cristianMD1.github.io/1.css',
      '/cristianMD1.github.io/1.jpg',
      '/cristianMD1.github.io/2.jpg',
      '/cristianMD1.github.io/3.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
