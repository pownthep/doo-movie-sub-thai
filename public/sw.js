if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"E71FhO34oLH0pIsTHf3En"},{url:"/_next/static/E71FhO34oLH0pIsTHf3En/_buildManifest.js",revision:"858387bf97d17982140c0d10a155579e"},{url:"/_next/static/E71FhO34oLH0pIsTHf3En/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/E71FhO34oLH0pIsTHf3En/pages/_app.js",revision:"85db23e965329dfd3b85202b03430ee4"},{url:"/_next/static/E71FhO34oLH0pIsTHf3En/pages/_error.js",revision:"00e9ad2e9f6b85449597ff374397b971"},{url:"/_next/static/E71FhO34oLH0pIsTHf3En/pages/index.js",revision:"7674ac2ae697dedbc4567064d19b2d5d"},{url:"/_next/static/E71FhO34oLH0pIsTHf3En/pages/posts/[id].js",revision:"ec7e92ecc76c7d7922a08ae89dd3f6ba"},{url:"/_next/static/chunks/62d8727dafbdeae5d05b3e64012f0b06534e75e6.21460fb8f40b9c4f1d6a.js",revision:"3a2b3561b6651a03a9ef3ee9cec329d7"},{url:"/_next/static/chunks/89e02cc1.54f98cb6baa664d46054.js",revision:"8e0d08a74003af3de5b122777b32095f"},{url:"/_next/static/chunks/commons.db9b5a0ac19e93d5953c.js",revision:"7e600eda31a706eb4325da9df509528a"},{url:"/_next/static/chunks/framework.98c1b221acb34aa9927b.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/92968528e7578ba8d7d8.css",revision:"5cdc19086db4a64c38de508c0eab7b3e"},{url:"/_next/static/css/e9b078b82849f2e2222f.css",revision:"a4131a2a29c41afe9f3b92386c8adfb3"},{url:"/_next/static/media/cinema 32x32.969c999bf9978e3bf7d30421e10377c1.png",revision:"0ab27e2453801bc555e06a356dacaad2"},{url:"/_next/static/runtime/main-75d496c1bb4743a4dead.js",revision:"bcf2e93d3f677548173aaf30f794f3f4"},{url:"/_next/static/runtime/polyfills-a0ee7e819ac33727cdcf.js",revision:"4f28bd3d37a02c31fea04e1a00cca933"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/apple-icon.png",revision:"3ee824ca3ff337278edd5155ea9923c1"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/images/1080p-full-hd.svg",revision:"0bf9a4fbfc44ea0259477a57f3fcc14b"},{url:"/images/480-pixels.svg",revision:"963d04a3d707ff6f62b5fed592313401"},{url:"/images/720-hd.svg",revision:"07c1a4807a42ad5dbf0e2c3e1bd6cf5c"},{url:"/images/cinema 32x32.png",revision:"37d89ac3882603ce4bd9f0fef2b112ba"},{url:"/images/cinema.png",revision:"85d8d5995c2d65d05648dd4bfad28a63"},{url:"/images/cinema.svg",revision:"161b80e44283a698946fc8b0a51d34e2"},{url:"/images/cultures.svg",revision:"235c6c717e99990f16d1e8689f5a7b71"},{url:"/images/icons/icon-128x128.png",revision:"0de6c93efc230714e0b8d342e5a52c16"},{url:"/images/icons/icon-144x144.png",revision:"a2262f4a0a9608c63eee9a8fea26fc7a"},{url:"/images/icons/icon-152x152.png",revision:"be2b7ff6eeff8c3f1cc28e2e37efbced"},{url:"/images/icons/icon-192x192.png",revision:"1cddc56ed678cdcb70c759b3e519e85c"},{url:"/images/icons/icon-384x384.png",revision:"e7d4b306a0b2fbb6fe2c6f40b6cb12c8"},{url:"/images/icons/icon-512x512.png",revision:"cd224428dc1de61e0e88be59736cb301"},{url:"/images/icons/icon-72x72.png",revision:"7d57d7b8afe495bd5a6f97308d0f14e1"},{url:"/images/icons/icon-96x96.png",revision:"0189bac56d916b77b0bc735724ba5172"},{url:"/images/profile.jpg",revision:"e0f1386006b3396b47b96da325629b47"},{url:"/images/search.png",revision:"881b6aa251e359a157f841b2f3f43e4d"},{url:"/images/search.svg",revision:"bff87aaab07e5b977b5f3d7cc6ddf530"},{url:"/images/totoro.svg",revision:"80f469f038f257f61d4080e83833d941"},{url:"/images/tv.svg",revision:"7ec141aefc9d83fe3ef96525a681d7f2"},{url:"/js/plyr.min.js",revision:"d01b2a79730ea01c14627a6c00dfbbd6"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/static/locales/en/common.json",revision:"5390adbcd0175412aa83cdc9b0f98547"},{url:"/static/locales/th/common.json",revision:"7f746995bafb1a035f40fda08b1593c4"},{url:"/vercel.svg",revision:"0222c3eef0be0734c8cd707b37c55d7e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
