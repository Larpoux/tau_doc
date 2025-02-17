'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "13f78e22a70a2ecf63144d262fe77fd7",
"version.json": "f049204f015711e8fbb68bfa91181556",
"index.html": "75fad508277b0ad0be20d6c0fe376d8d",
"/": "75fad508277b0ad0be20d6c0fe376d8d",
"js/flutter_sound/flutter_sound_recorder.js": "1a1c9a33cb5271cb45d05fc6fbb22d94",
"js/flutter_sound/flutter_sound_player.js": "f1e6d4273d42a9815050dcbef52f7cf3",
"js/flutter_sound/flutter_sound.js": "cc4c60ac93421858efa4d4f21696a869",
"js/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"main.dart.js": "f484b482623d42a908c50b122511f1e2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "679ba5c106339248760c6d66796ba3c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-83.png": "679ba5c106339248760c6d66796ba3c8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"assets/AssetManifest.bin.json": "278e558418806f37d7bd0e513a129cc5",
"assets/AssetManifest.json": "4aab6de5c83762d5f2b572be031999f7",
"assets/res/icons/2.0x/ic_stop.png": "75621901447cf54d6e228228d277f2e2",
"assets/res/icons/2.0x/ic_pause.png": "2207620d646b829f4d5253d2add1dc4c",
"assets/res/icons/2.0x/ic_play.png": "c17df9a085c223b89f9654818c66947e",
"assets/res/icons/2.0x/ic_mic.png": "f1aa43acfe152d549bd27a5575e2e727",
"assets/res/icons/2.0x/ic_volume_up.png": "58e41f88ae99cc3035bfab43c3c90495",
"assets/res/icons/2.0x/ic_volume_down.png": "ca834163acfc02fac8068956197e5ca9",
"assets/res/icons/ic_stop.png": "551a3d66204364de6c315996d0490985",
"assets/res/icons/ic_pause.png": "8acac40033925f50c6cac243be032e45",
"assets/res/icons/3.0x/ic_stop.png": "4314dfc4fa6450ea3a03ff5214a5b324",
"assets/res/icons/3.0x/ic_pause.png": "18a1fec3d4515168624fdc664299bf3b",
"assets/res/icons/3.0x/ic_play.png": "11c83b4ca1aa276398e58ea5a630b442",
"assets/res/icons/3.0x/ic_mic.png": "e74379f1a4bb9f6377587e7e5b0b66cd",
"assets/res/icons/3.0x/ic_volume_up.png": "0b888410469da6600c0f9c251b109c0e",
"assets/res/icons/3.0x/ic_volume_down.png": "99fa0c0882261499b44ac205aeb249ae",
"assets/res/icons/ic_play_disabled.png": "37093104d0704e82e37ff77b5bfe3c14",
"assets/res/icons/ic_play.png": "31d3f44aaf4144d295ef9902d6f28304",
"assets/res/icons/ic_mic.png": "e446f3470a9deaa051d92265d56eba68",
"assets/res/icons/ic_stop_disabled.png": "d53e5e6021cc023aca562b4753853900",
"assets/res/icons/ic_volume_up.png": "eed6ca154b0a540723b58b4a43864370",
"assets/res/icons/ic_volume_down.png": "0113bb8289967b8858337352320523a1",
"assets/res/icons/ic_pause_disabled.png": "53feda844a6a60d7ba68787aaad65cb3",
"assets/res/icons/ic_mic_disabled.png": "0622347432196c951cf1c916f620a3d2",
"assets/NOTICES": "9fe080b0bfce0c999119b0c0e850d532",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "1a1c9a33cb5271cb45d05fc6fbb22d94",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "f1e6d4273d42a9815050dcbef52f7cf3",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "cc4c60ac93421858efa4d4f21696a869",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0e9f8af57277c3af328a91684fec068a",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/noises/bam.wav": "d31636ebf83dd656bae82eec4954e45e",
"assets/assets/noises/boum.wav": "9b5a7487f3ee1a61d8a9c18212506c37",
"assets/assets/noises/bim.wav": "2b9e86af8b4977463beb79b5762a9943",
"assets/assets/canardo.png": "f5938f65fbd61a841cd7f2b489382eb3",
"assets/assets/samples/sample.opus": "9a48e797d31e9db071c8b41405a152b7",
"assets/assets/samples/sample.8000.pcm": "33ea7a896be7bda5806053a617bf15bf",
"assets/assets/samples/sample.raw": "b1bd1e474aaaeae9307c3257dda026d4",
"assets/assets/samples/sample_f32_2ch.wav": "4960959aeb116044150cf142a219600a",
"assets/assets/samples/sample_f32.wav": "5d974d56fe6b6b79194d343eebfb80af",
"assets/assets/samples/sample_2ch.wav": "47885eebe98b67fe13dedb55a748d1dd",
"assets/assets/samples/sample.pcm": "3b8cefb3e6eafea53c88d2892e0f7bfa",
"assets/assets/samples/sample.mp3": "96c7a0ec34f1e1c0f5365c496637c4ba",
"assets/assets/samples/sample.mp4": "a7664902ad7c3261f87aec5c331e6aa8",
"assets/assets/samples/sample_xxx.amr": "baaa229706618063c5f8817ebd718993",
"assets/assets/samples/sample_pcm.caf": "cdae8be3c67724b73772628288d88f51",
"assets/assets/samples/sample.aiff": "3f3ad72e542f9b534d207baf3cfcdcf3",
"assets/assets/samples/zozo.wav": "50d3230f794dffb773f998820469866e",
"assets/assets/samples/sample.m4a": "8468c83c274c598b11ee6db8b20d0c1d",
"assets/assets/samples/titi.wav": "ae678e041bd9e645e61880867bf899ba",
"assets/assets/samples/toto.wav": "4ef3c16e5ae15c04033e7ac6ec99b437",
"assets/assets/samples/sample_s16_2ch.raw": "4560aee92b450e2ee6856b0a6476375b",
"assets/assets/samples/roro.wav": "40a4e50c50a10a013f5ea500e9b0659c",
"assets/assets/samples/sample_f32.raw": "d985b2d0554dfa63de57b3a7e90da623",
"assets/assets/samples/sample.flac": "bf3e25117cd3c17206e81aa6c29af37b",
"assets/assets/samples/roro.ogg": "244a78eb5d3f5173d57504ed59377b40",
"assets/assets/samples/toto.ogg": "aca9d04107cd2dd099f61a7f3b5ccccd",
"assets/assets/samples/sample_vorbis.webm": "c27f0131c35f429b434e9812a6e47962",
"assets/assets/samples/sample_opus.webm": "66261bced065a5b4e5db3eee599a9ec6",
"assets/assets/samples/sample_wav32.wav": "5d974d56fe6b6b79194d343eebfb80af",
"assets/assets/samples/sample.amr": "baaa229706618063c5f8817ebd718993",
"assets/assets/samples/sample.aac": "4e468b57e747b69efdc0e519a064b054",
"assets/assets/samples/sample.ogg": "0c6b87b91fc50895cdfd4c2e911157a3",
"assets/assets/samples/sample2.aac": "14e928db49f39fd1f8465544515ab5df",
"assets/assets/samples/sample_f32_2ch.raw": "84f922af5ada4bb1e2456dd82e90804b",
"assets/assets/samples/sample.wav": "ab5bc642f652d1af0569a10e1ac1b005",
"assets/assets/samples/sample_xxx.pcm": "36b7666d97052ffb176fd85482da6f24",
"assets/assets/samples/sample_opus.caf": "f9b9bd6d442660f9ad5f7f3bc21284b7",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
