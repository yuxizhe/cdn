importScripts('sw-toolbox.js')

self.addEventListener('install', event => {
  //取消更新后的等待
  self.skipWaiting();
});

toolbox.router.get(/(.png|.jpg)/, toolbox.cacheFirst, {
  cache: {
      name: "sw-nasgo-img"
  }
})

toolbox.router.get(/http.*(.js|.css)/, toolbox.cacheFirst, {
  cache: {
      name: "sw-nasgo-jscss"
  }
})

// 首页缓存
toolbox.router.get('/', toolbox.networkFirst, {
  cache: {
      name: "html"
  }
})

// 接口缓存
toolbox.router.get(/list/, toolbox.networkFirst, {
  cache: {
      name: "json"
  }
})