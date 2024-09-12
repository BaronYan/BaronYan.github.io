import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/单位和函数.html.vue"
const data = JSON.parse("{\"path\":\"/css/%E5%8D%95%E4%BD%8D%E5%92%8C%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"CSS 常用函数\",\"slug\":\"css-常用函数\",\"link\":\"#css-常用函数\",\"children\":[{\"level\":3,\"title\":\"calc\",\"slug\":\"calc\",\"link\":\"#calc\",\"children\":[]},{\"level\":3,\"title\":\"clamp\",\"slug\":\"clamp\",\"link\":\"#clamp\",\"children\":[]},{\"level\":3,\"title\":\"min/max\",\"slug\":\"min-max\",\"link\":\"#min-max\",\"children\":[]},{\"level\":3,\"title\":\"minmax\",\"slug\":\"minmax\",\"link\":\"#minmax\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720352800000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/单位和函数.md\",\"excerpt\":\"<p>我们在 CSS 中只使用“px”（像素）的日子已经一去不复返了。如今，我们有很多选择。选择什么单位取决于上下文，有些应该用于文本，有些用于容器，有些用于打印。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>单位</th>\\n<th>Name</th>\\n<th>相当于</th>\\n<th>关系到</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>em</td>\\n<td>parent font size</td>\\n<td>1em = parent font size</td>\\n<td>Font</td>\\n</tr>\\n<tr>\\n<td>rem</td>\\n<td>font size of the root element</td>\\n<td>1rem = size of root element</td>\\n<td>Font</td>\\n</tr>\\n<tr>\\n<td>cap</td>\\n<td>height of root capital letters</td>\\n<td>1cap = height of a root element capital letter</td>\\n<td>Font</td>\\n</tr>\\n<tr>\\n<td>rcap</td>\\n<td>height of root capital letters</td>\\n<td>1cap = height of a root element capital letter</td>\\n<td>Font</td>\\n</tr>\\n<tr>\\n<td>vw</td>\\n<td>default viewport width</td>\\n<td>1vw = 1% of the default viewport’s width</td>\\n<td>Viewport</td>\\n</tr>\\n<tr>\\n<td>vh</td>\\n<td>default viewport height</td>\\n<td>1vh = 1% of the default viewport’s height</td>\\n<td>Viewport</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
