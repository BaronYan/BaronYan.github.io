import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/margin.inline.html.vue"
const data = JSON.parse("{\"path\":\"/css/margin.inline.html\",\"title\":\"margin-inline\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1718723406000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/margin.inline.md\",\"excerpt\":\"\\n<p>margin-inline 定义了元素的逻辑内联开始和结束页边距。</p>\\n<p>此属性是以下 CSS 属性的简写：</p>\\n<ol>\\n<li>margin-inline-start</li>\\n<li>margin-inline-end</li>\\n</ol>\\n<p>此属性对应于<code>margin-top</code>和<code>margin-bottom</code>，或<code>margin-right</code>和<code>margin-left</code>属性，\\n具体取决于 <code>writing-mode</code> 、<code>direction</code> 和定义的值<code>text-orientation</code> 。</p>\"}")
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
