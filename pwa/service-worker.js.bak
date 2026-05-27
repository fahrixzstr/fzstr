const CACHE_NAME =
'fahrixz-cache-v1';

const urlsToCache = [

'/',
'/index.html',
'/css/style.css',
'/js/app.js'

];

self.addEventListener(
'install',
(event)=>{

event.waitUntil(

caches.open(
CACHE_NAME
)

.then((cache)=>{

return cache.addAll(
urlsToCache
);

})

);

});

self.addEventListener(
'fetch',
(event)=>{

event.respondWith(

caches.match(
event.request
)

.then((response)=>{

return response ||
fetch(event.request)

.catch(()=>{

return caches.match(
OFFLINE_URL
);

})

);

});

const OFFLINE_URL =
'/offline.html';