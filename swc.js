const fs = require('fs');
const path = require('path');

// Configuration
const CACHE_NAME = 'venturi-meter-v1';
const EXCLUDE_PATTERNS = [
  /^\.github\//,
  /^\.git\//,
  /\.md$/,
  /\.cff$/,
  /LICENSE$/,
  /sws\.js$/, // Exclude this generator file
  /package(-lock)?\.json$/,
  /node_modules\//
];


// Get all files recursively
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      const shouldExclude = EXCLUDE_PATTERNS.some(pattern => pattern.test(relativePath));
      if (!shouldExclude) {
        fileList.push('/' + relativePath);
      }
    }
  });
  
  return fileList;
}

// Generate the service worker content based on your template
function generateServiceWorker(files) {
  const allUrls = [...files];

  return `// Auto-generated Service Worker - ${new Date().toISOString()}
const CACHE_NAME = '${CACHE_NAME}';
const urlsToCache = ${JSON.stringify(allUrls, null, 2)};

// Install the service worker and cache all necessary files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // If fetch fails and the request is for HTML, return the cached index.html
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for data updates when connection is restored
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      fetchLatestData()
        .then(() => {
          console.log('Data synced successfully');
          return Promise.resolve();
        })
        .catch(error => {
          console.log('Sync failed', error);
          return Promise.reject();
        })
    );
  }
});

function fetchLatestData() {
  // This would be your data fetching logic
  return fetch('/venturi_data.json')
    .then(response => response.json())
    .then(data => {
      // Store the data in IndexedDB or cache
      return Promise.resolve();
    });
}
`;
}

// Main execution
try {
  const allFiles = getFiles('.');
  const swContent = generateServiceWorker(allFiles);
  
  fs.writeFileSync('sw.js', swContent);
  console.log('✅ sw.js generated successfully');
  console.log(`ℹ️ Total files cached: ${allFiles.length}`);
  console.log(`ℹ️ Cache name: ${CACHE_NAME}`);
} catch (error) {
  console.error('❌ Error generating sw.js:', error);
}
