'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7e3861b3765bb87b316c51f46103097d",
".git/config": "66c4766960b1913ebad97f29123bc002",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1908d18f9947a4539f76445fd72bb77d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "49161a7eeaab9487e3b1ef7f03c42781",
".git/logs/refs/heads/main": "61d51423776631d4168554b1a2f776e6",
".git/logs/refs/remotes/origin/main": "f77c8bf1e78bfc3fcf0554e371525bb8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/08/dd0787141b11ed79cfae335dd3a759193e197e": "26106290e742ee5f820eb5277cadc3de",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/29/7c93b634c453aaaa9e3229ca51d4c10979e6ae": "fe325a8a7910cd5acd4a528bc1275c7d",
".git/objects/34/97083b7eadec97c98a93a89e4109b5852dc0e8": "3461690999f2a34a187bafc0f7b042e1",
".git/objects/35/6882b73f6917d0336236f0580b6d0e42e3c08b": "4813d77fa36c9b727be17d68c83120ee",
".git/objects/45/1c387d9f3ad723f5b7008f551549566a1d6342": "958e6ddf9cb6bde9310334e0d2af073a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/59/d7b499ff5ed56e963ad86d94892c60f096a52d": "914d3d77fc395574fc9eba6f5832fe46",
".git/objects/5a/0196dab3efb99aa1f8085150a7daf877a874b4": "4efe6782e2a4386367bc106322f7f4a8",
".git/objects/5b/116d13e1c03b5e3f2bcc50f173aa6f82df583a": "2be5fa49d5d10f4de4e542f0dcce18df",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/7d/a17b7c16037c29f71cb8a14d50b8b269d7af09": "1e988a1b539655c9f1828613b1d7f3cd",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "6fdd92d7e08d5916358e7f30a83d2d51",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/a6/61c470d7e6fc9c1e6cb94a99b28241e8c387f9": "d2b6fa2a98c207b0a201d34d7c1497e9",
".git/objects/ad/d4ef989085676818018660fc44bf3e0843b32f": "3856c0396ca79662be5f6963b7480fec",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/b3/5ca30d66806f8ddcbf3caea33d311e1911b941": "2e439aec6a80c5171b02fdbf5646f73b",
".git/objects/b4/0516c3fa47584fdd3c4400b8db134b04385f27": "1f3eb115138fcdd0c08fd380643ca262",
".git/objects/b7/2b42e55d033f358eca78bf356e2435b7fe8147": "6eab4afe871adaf4b5ca2fd5a6737bda",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/c88b0e18fd8e2148b9a02a11aa0c9faa02cec4": "107646a9c9b1a150775b8b05c9dc43e2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/c3/d43c25a71f2b1d15b03282545c2b054054b2b4": "6741f59850f4f97a059f8c4fdb6d3ae2",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/cb/1afa17be34d52468a6c90b2ec2615563598ff5": "5db79facba7370fdd6e4f79fa7cc4f3d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/db/da1989db4834566825ac0725b7e2e0f6832aac": "26da53b813d2ea4842aa58dd1c1ebc86",
".git/objects/e4/a0de695e795dcef63706fd5660e7f3b6a3ae44": "c79cb9d2e39a781222d556ece13103f0",
".git/objects/e6/fc39814d84136e5c00d20716c7f4232d971833": "3ce6b023685f92e03963b4f104db93e3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f4/f6621a04e8d2ec59adfe5b64dc1dadaf173271": "7b8279e0f54b085dc4a484b5aee2bc77",
".git/objects/fa/dfdf486769da47356d364bb457cbff65ef0064": "7e07bf8007fb42a2aab1e8e2f967ac97",
".git/objects/fe/dc4154961617985d11ca0b64182d66f76cd5a5": "07897baa14a11d366b75a56fb7a3339d",
".git/refs/heads/main": "bd008f843027dc315c4face23d7543b3",
".git/refs/remotes/origin/main": "bd008f843027dc315c4face23d7543b3",
"assets/AssetManifest.bin": "c77c36219ff50f57331e5609470fc70f",
"assets/AssetManifest.bin.json": "eeaa31437480dd48c3ca7fc4199592d2",
"assets/AssetManifest.json": "9a1a89343e7f7d140ef86ea8eef08ad7",
"assets/assets/icon.gif": "177da3bfa05af2b0067c253489f5fc48",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fd36a16819423120fc17ce4e8e081d88",
"assets/NOTICES": "8b508b4d80644c4d6a618075d83903b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5c20ba40111a7ccba399c9b39af60e75",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4781a5615e0a36087741e64f4e6dccc2",
"/": "4781a5615e0a36087741e64f4e6dccc2",
"main.dart.js": "889d02a265ac94bce7ee9454c15fe2ee",
"manifest.json": "cc56a1603afcb0c31bda8395f78c6965",
"splash/img/dark-1x.gif": "f6e7c91016b911b59edb740957af0bab",
"splash/img/dark-2x.gif": "c08f97fc058ce06e02f378d9f789c42d",
"splash/img/dark-3x.gif": "5cdca4cb2193a643d09da007af3ba193",
"splash/img/dark-4x.gif": "f7078f27f4f3aa4ef0c3bd949b79a815",
"splash/img/light-1x.gif": "f6e7c91016b911b59edb740957af0bab",
"splash/img/light-2x.gif": "c08f97fc058ce06e02f378d9f789c42d",
"splash/img/light-3x.gif": "5cdca4cb2193a643d09da007af3ba193",
"splash/img/light-4x.gif": "f7078f27f4f3aa4ef0c3bd949b79a815",
"version.json": "91726ad8ba3861d7b9c8c2889c38ae10"};
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
