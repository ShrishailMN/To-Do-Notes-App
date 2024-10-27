self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./tasks.html",
        "./notes.html",
        "./style.css",
        "./script-tasks.js",
        "./script-notes.js",
        "./manifest.json",
        "./icon.webp" // Add the webp icon here
      ]);
    })
  );
});
