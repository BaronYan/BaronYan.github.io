import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/eloquent.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/eloquent.html\",\"title\":\"Eloquent 基本知识\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"批量分配\",\"slug\":\"批量分配\",\"link\":\"#批量分配\",\"children\":[{\"level\":3,\"title\":\"create 和 firstOrCreate 有哪些区别\",\"slug\":\"create-和-firstorcreate-有哪些区别\",\"link\":\"#create-和-firstorcreate-有哪些区别\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725707913000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"laravel/eloquent.md\",\"excerpt\":\"\\n<h2>批量分配</h2>\\n<h3>create 和 firstOrCreate 有哪些区别</h3>\\n<p><code>create</code> 和 <code>firstOrCreate</code> 是 Laravel Eloquent ORM 中用于创建新记录的两个不同方法。它们有以下主要区别：</p>\\n<ol>\\n<li><code>create</code> 方法：\\n<ul>\\n<li>总是创建一个新记录。</li>\\n<li>如果记录已存在，会创建一个重复的记录。</li>\\n<li>更快，因为它不需要先查询数据库。</li>\\n</ul>\\n</li>\\n<li><code>firstOrCreate</code> 方法：\\n<ul>\\n<li>首先尝试查找匹配的记录。</li>\\n<li>如果找到匹配的记录，返回该记录。</li>\\n<li>如果没有找到匹配的记录，则创建一个新记录。</li>\\n<li>可以防止创建重复记录。</li>\\n<li>firstOrCreate 允许您分别指定用于查找的属性和用于创建的属性。</li>\\n</ul>\\n</li>\\n</ol>\"}")
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
