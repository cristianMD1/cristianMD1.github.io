self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/cristianMD1.github.io/',
      '/cristianMD1.github.io/index.html',
      '/cristianMD1.github.io/index.js',
      '/cristianMD1.github.io/style.css',
      '/cristianMD1.github.io/images/goku1.jpg',
      '/cristianMD1.github.io/images/goku2.jpg',
      '/cristianMD1.github.io/images/goku3.jpg',
      '/cristianMD1.github.io /images/goku4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
