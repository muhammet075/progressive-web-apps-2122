const cacheName = "v1",
  cacheAssets = [
    "/",
    "./css/main.css",
    "./img/crypto.svg",
    "./img/bitcoin.svg",
    "./js/script.js",
  ];
self.addEventListener("install", (e) => {
  console.log("Service Worker: Geinstalleerd"),
    caches
      .open("v1")
      .then((e) => {
        console.log("Service Worker: Caching bestanden"), e.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting());
}),
  self.addEventListener("active", (e) => {
    console.log("Service Worker: Geactiveerd"),
      e.waitUntill(
        caches
          .keys()
          .then((e) =>
            Promise.all(
              e.map(
                (e) => (
                  "v1" !== e && console.log("oude cash verwijderd"),
                  caches.delete(cashe)
                )
              )
            )
          )
      );
  }),
  self.addEventListener("fetch", (e) => {
    console.log("Service Working: Fetching"),
      e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  });
