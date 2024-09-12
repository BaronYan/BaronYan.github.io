import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/outline.html.vue"
const data = JSON.parse("{\"path\":\"/css/outline.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"outline 属性\",\"slug\":\"outline-属性\",\"link\":\"#outline-属性\",\"children\":[]},{\"level\":3,\"title\":\"outline-offset 属性\",\"slug\":\"outline-offset-属性\",\"link\":\"#outline-offset-属性\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":1721056834000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/outline.md\",\"excerpt\":\"<p>CSS 中的 <code>outline</code> 和 <code>outline-offset</code> 属性用于为元素添加轮廓线，轮廓线绘制在元素边框的外部。它们与边框不同，不会影响元素的布局或尺寸。下面是详细介绍：</p>\\n<h3>outline 属性</h3>\\n<p>outline 属性用于设置元素的轮廓线。它包含三个子属性：</p>\\n<ul>\\n<li><code>outline-color</code>: 轮廓线的颜色。</li>\\n<li><code>outline-style</code>: 轮廓线的样式（如实线、虚线等）。</li>\\n<li><code>outline-width</code>: 轮廓线的宽度。</li>\\n</ul>\"}")
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
