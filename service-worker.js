self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lithiumizer-cache").then(cache => {
      return cache.addAll([
        "/",
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
