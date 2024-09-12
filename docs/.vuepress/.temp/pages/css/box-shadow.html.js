import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/box-shadow.html.vue"
const data = JSON.parse("{\"path\":\"/css/box-shadow.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"box-shadow 属性\",\"slug\":\"box-shadow-属性\",\"link\":\"#box-shadow-属性\",\"children\":[]},{\"level\":3,\"title\":\"阴影的本质\",\"slug\":\"阴影的本质\",\"link\":\"#阴影的本质\",\"children\":[]}],\"git\":{\"updatedTime\":1721056834000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/box-shadow.md\",\"excerpt\":\"<h3>box-shadow 属性</h3>\\n<p>CSS 的 <code>box-shadow</code> 属性用于给元素添加阴影效果。\\n你可以通过这个属性指定阴影的 <code>水平偏移</code>、<code>垂直偏移</code>、<code>模糊半径</code>、<code>扩展半径</code> 以及 <code>阴影的颜色</code>。</p>\\n<h4>基本语法如下：</h4>\\n<div class=\\\"language-css\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre class=\\\"language-css\\\"><code><span class=\\\"line\\\"><span class=\\\"token property\\\">box-shadow</span><span class=\\\"token punctuation\\\">:</span> </span>\\n<span class=\\\"line\\\">    [horizontal-offset] </span>\\n<span class=\\\"line\\\">    [vertical-offset] </span>\\n<span class=\\\"line\\\">    [blur-radius] </span>\\n<span class=\\\"line\\\">    [spread-radius] </span>\\n<span class=\\\"line\\\">    [color]<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
