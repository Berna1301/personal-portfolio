const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/css/main.css',
  '/static/js/main.js',
  '/static/media/CentraNo2-Book.2b143fa4b734a3584043.ttf',
  '/static/media/CentraNo2-Bold.2faff7f7d3fc92a2fcd9.ttf',
  '/static/media/CentraNo2-Medium.f94be5b326d78bb32b95.ttf',
  '/static/media/revicons.e8746a624ed098489406.woff',
  '/static/media/logo192.png',
  '/static/media/logo.652ffa5bdd0e4220be8fd926f3656bc3.svg',
  '/static/media/nav-icon1.721d5414c26365f117e71d46b6641cb2.svg',
  '/static/media/nav-icon2.178f497aa17b70c42df2a1a8c926ed01.svg',
  '/static/media/nav-icon3.08b285abb8e118b52637efa5d65c5367.svg',
  '/static/media/logo_processed.cc7687689c08d195c1ca.png',
  '/static/media/integracion_sistemas.aeb39d4f5cd30eeef0cf.jpg',
  '/static/media/desarrollo_software.89a58fe63a40de9adf16.jpg',
  '/static/media/consultoria_software.fd103787ebbe10ccdc73.jpg',
  '/static/media/mantenimiento_soporte.12ff995f4a7aca4e5758.jpg',
  '/static/media/color-sharp2.1e79cf35553978f47a62.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching resources...');
        return cache.addAll(urlsToCache).catch((error) => {
          console.error('Error caching resources: ', error);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Si el recurso está en caché, se devuelve directamente
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no está en caché, hace una solicitud a la red
        return fetch(event.request).then((response) => {
          // Verifica si la respuesta es válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Si es una respuesta válida, guarda el recurso en caché
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        }).catch((error) => {
          console.error('Error during fetch: ', error);
          return new Response('Network error', { status: 408, statusText: 'Network error' });
        });
      })
  );
});
