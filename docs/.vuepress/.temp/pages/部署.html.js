import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/部署.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%83%A8%E7%BD%B2.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"部署 Actions\",\"slug\":\"部署-actions\",\"link\":\"#部署-actions\",\"children\":[]},{\"level\":2,\"title\":\"设置 Secrets\",\"slug\":\"设置-secrets\",\"link\":\"#设置-secrets\",\"children\":[]},{\"level\":2,\"title\":\"编写 Action\",\"slug\":\"编写-action\",\"link\":\"#编写-action\",\"children\":[]}],\"git\":{\"updatedTime\":1718723406000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"部署.md\",\"excerpt\":\"<h2>部署 Actions</h2>\\n<p>要部署 Actions，需要有能够操作我们仓库的权限，因此需要提前设置访问令牌（Github personal access）。<br>\\n设置方法如下：</p>\\n<ol>\\n<li>进入 Github 后，点击我们的头像，</li>\\n<li>然后依次进入 Settings -&gt; Developer settings -&gt; Personal access tokens -&gt; Fine-grained tokens</li>\\n<li>然后点击 <code>Generate a personal access token</code> ，</li>\\n<li>接着输入 token 的名字，这个名字可以随意，不过还是推荐根据它的用途来命名。</li>\\n<li>然后选 Expiration，也就是这个 Token 的有效期，如果我们要长期用，建议选为 No expiration，意思就是无期限。</li>\\n<li>最后就是选权限，一般来讲这里选 repo 就够了，但是如果你不确定，那就全都选上也行。</li>\\n<li>然后点击 Generate Token，会生成一个令牌，注意这里它只会出现一次，一旦刷新该网页就不见了，所以最好把它复制到你的备忘录备份一下，而且我们待会也是需要用到这个 Token 的。</li>\\n</ol>\"}")
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
