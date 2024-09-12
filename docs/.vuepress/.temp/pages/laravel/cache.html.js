import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/cache.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/cache.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"Redis\",\"slug\":\"redis\",\"link\":\"#redis\",\"children\":[]},{\"level\":2,\"title\":\"存储\",\"slug\":\"存储\",\"link\":\"#存储\",\"children\":[]},{\"level\":2,\"title\":\"检索\",\"slug\":\"检索\",\"link\":\"#检索\",\"children\":[]},{\"level\":2,\"title\":\"检索和存储\",\"slug\":\"检索和存储\",\"link\":\"#检索和存储\",\"children\":[]},{\"level\":2,\"title\":\"检索和删除\",\"slug\":\"检索和删除\",\"link\":\"#检索和删除\",\"children\":[]},{\"level\":2,\"title\":\"删除\",\"slug\":\"删除\",\"link\":\"#删除\",\"children\":[]}],\"git\":{\"updatedTime\":1720534286000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"laravel/cache.md\",\"excerpt\":\"<h2>介绍</h2>\\n<ul>\\n<li><a href=\\\"https://laravel.com/docs/11.x/cache\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Cache</a></li>\\n</ul>\\n<p>应用程序执行的某些数据检索或处理任务可能会占用大量 CPU 或需要几秒钟才能完成。\\n在这种情况下，通常会将检索到的数据缓存一段时间，以便在后续对相同数据的请求中快速检索这些数据。\\n缓存的数据通常存储在非常快速的数据存储中，例如 Memcached 或 Redis。</p>\\n<h2>Redis</h2>\\n<p>在 Laravel 中使用 Redis 缓存之前，您需要通过 PECL 安装 <code>PhpRedis</code> 扩展或\\n通过 Composer 安装 <code>predis/predis</code> 软件包。</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
