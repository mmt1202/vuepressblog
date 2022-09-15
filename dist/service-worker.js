/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1108998e46b30d02f4c331608b539b07"
  },
  {
    "url": "assets/css/0.styles.fd508535.css",
    "revision": "af916abb9a0b176fb330e4554c7e0a62"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.6e695574.js",
    "revision": "e2d7b4633d5efb73ad9d00e16656694c"
  },
  {
    "url": "assets/js/10.25e3eba5.js",
    "revision": "1f90491efcb3907229127b5899cd273d"
  },
  {
    "url": "assets/js/11.3e70fdc1.js",
    "revision": "0d3e9b1b4955f83729a17e96c553fa6e"
  },
  {
    "url": "assets/js/12.5476d40c.js",
    "revision": "31544cf593848c8dac31b4eb9454f43b"
  },
  {
    "url": "assets/js/13.df40af01.js",
    "revision": "12e4561000aa6630a51fd12e779dd4d8"
  },
  {
    "url": "assets/js/14.14678cb5.js",
    "revision": "d033a6b5e9b55172813f8293d339ea0c"
  },
  {
    "url": "assets/js/15.99f1412a.js",
    "revision": "5314b9afef31bf799a908ae3f08b765d"
  },
  {
    "url": "assets/js/16.1339d784.js",
    "revision": "47ef9e0f647e23e4b3a8c5314a420254"
  },
  {
    "url": "assets/js/17.89a0ffdb.js",
    "revision": "94d8183b966e0dbddfcd13a361ddab28"
  },
  {
    "url": "assets/js/18.fb535ec1.js",
    "revision": "66dbdfea6e7e0d2a6f01a65e4cf98ecf"
  },
  {
    "url": "assets/js/19.de99ec61.js",
    "revision": "3fb89fd95431246bb520de70b8a459f2"
  },
  {
    "url": "assets/js/20.1b0287ad.js",
    "revision": "bd5b0881d3be8eae605b39abbc4bbfb6"
  },
  {
    "url": "assets/js/21.4e4a02e9.js",
    "revision": "55a62b494a26142c45b83a6ad4a2c2ca"
  },
  {
    "url": "assets/js/4.f69996a1.js",
    "revision": "180f6f28994ee21893c4e1bde9271aa7"
  },
  {
    "url": "assets/js/5.4d22e4eb.js",
    "revision": "c5d7f2d4aa3e93502679e769eb77ae4c"
  },
  {
    "url": "assets/js/6.a12cdaea.js",
    "revision": "cf262ed4beffcceda803823e37e51e03"
  },
  {
    "url": "assets/js/7.6acdf710.js",
    "revision": "bc96df3ace4d75e29a879d410ea41def"
  },
  {
    "url": "assets/js/8.37e8383e.js",
    "revision": "e0c7a61f8b51ed40a0806a4dde22edb2"
  },
  {
    "url": "assets/js/9.f7ed9d14.js",
    "revision": "f342b49cdf882b3fa4b7196644034c91"
  },
  {
    "url": "assets/js/app.6007d915.js",
    "revision": "95e3b5fbe727fe933709b13dde02afe1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.e51760b9.js",
    "revision": "d85aa3a52dda6e2d8d4bcd7e08004301"
  },
  {
    "url": "avatar.jpg",
    "revision": "2b32471d18e80e7c8cac885db4356d9b"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "96070a68d751ad80e975b1ed23a858f5"
  },
  {
    "url": "categories/index.html",
    "revision": "08dc3d22c27574e6735b474249ba3fc3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8a1ab4b3112b7ddba4e673cc758ec41c"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "e16ffbed5ecf2904c2f65f768c459073"
  },
  {
    "url": "categories/前端学习路线/index.html",
    "revision": "84fb64f5ca473efa4ff734717b405aff"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "987410b4af00041d8a312c05dec5bcf8"
  },
  {
    "url": "css/style.css",
    "revision": "6d966fff772f5e50b07729e09e164eab"
  },
  {
    "url": "guide/index.html",
    "revision": "19183e0b4e31ac19e77606e9ecf95f37"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "dd4e103a0de0a14e4c70cd6f07a64558"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "2b32471d18e80e7c8cac885db4356d9b"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "58ccf0fe53e5efd0473932627371249b"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "8abd1352e7e92544319bcc7683672f5e"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "9b176c37ffde41b27ba44ef292c782b9"
  },
  {
    "url": "tags/HTML/index.html",
    "revision": "7ab0ced04f2d22364a2996c5c58510c0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f612f9adef366a30a52710b8bbb594ed"
  },
  {
    "url": "tags/react/index.html",
    "revision": "93c17f95c83b13cfeba95df761b50119"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b51f5b7e6edca79fee97f04302da1b65"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3cb5fdbc7d538b986dd8efbacf8c5304"
  },
  {
    "url": "tags/前端学习路线/index.html",
    "revision": "432972ed4cf0742b6574507e7025499a"
  },
  {
    "url": "tags/汇编语言/index.html",
    "revision": "996d2a0559cd1b56e292fefb3b3675e2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "21735be9a1968626bafd986cdb05f549"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a97d989348d57d66bffc652b3af6dbb6"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f0d0a2c9dfc14efdf6cfc10d775aa70"
  },
  {
    "url": "前端零基础学习路线/前端学习路线.html",
    "revision": "04c9419c1c709ca7266f858957057f8c"
  },
  {
    "url": "技术文章/CSS篇/CSS.html",
    "revision": "94b4b9af8f75b7fc802f0d938da2f970"
  },
  {
    "url": "技术文章/HTML篇/HTML.html",
    "revision": "43be4d109805d0a0675cf6da2411cd1f"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9bbb57d38b9690a0431dd8a2ea2b9680"
  },
  {
    "url": "技术文章/JavaScript篇/JavaScript.html",
    "revision": "4d993ad19c585efb9c2c32811671335e"
  },
  {
    "url": "技术文章/react篇/react.html",
    "revision": "4a4060f9ba88704d6a3716249180565e"
  },
  {
    "url": "技术文章/vue篇/vue01.html",
    "revision": "2c4433a591d1fc6e0a90de4db2667676"
  },
  {
    "url": "生活分享/life.html",
    "revision": "848205b1771b063848f40f2da3a3b161"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
