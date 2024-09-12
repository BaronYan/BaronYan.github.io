import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/视口相关单位.html.vue"
const data = JSON.parse("{\"path\":\"/css/%E8%A7%86%E5%8F%A3%E7%9B%B8%E5%85%B3%E5%8D%95%E4%BD%8D.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1724077530000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"css/视口相关单位.md\",\"excerpt\":\"<p>在 CSS 世界中，有 <code>vw</code>、<code>vh</code>、<code>vmax</code>、<code>vmin</code> 这几个与视口 Viewport 相关的单位。</p>\\n<p>正常而言：</p>\\n<ul>\\n<li><code>1vw</code> 等于 <code>1/100</code> 的视口宽度 （Viewport Width）</li>\\n<li><code>1vh</code> 等于 <code>1/100</code> 的视口高度 （Viewport Height）</li>\\n<li><code>vmin</code> — <code>vmin</code> 的值是当前 <code>vw</code> 和 <code>vh</code> 中较小的值</li>\\n<li><code>vmax</code> — <code>vw</code> 和 <code>vh</code> 中较大的值</li>\\n</ul>\"}")
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
