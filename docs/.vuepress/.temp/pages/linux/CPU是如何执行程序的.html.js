import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/linux/CPU是如何执行程序的.html.vue"
const data = JSON.parse("{\"path\":\"/linux/CPU%E6%98%AF%E5%A6%82%E4%BD%95%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F%E7%9A%84.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"基础\",\"slug\":\"基础\",\"link\":\"#基础\",\"children\":[{\"level\":3,\"title\":\"内核是什么？\",\"slug\":\"内核是什么\",\"link\":\"#内核是什么\",\"children\":[]},{\"level\":3,\"title\":\"处理器的模式\",\"slug\":\"处理器的模式\",\"link\":\"#处理器的模式\",\"children\":[]}]}],\"git\":{\"updatedTime\":1724600229000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"linux/CPU是如何执行程序的.md\",\"excerpt\":\"<p>https://geekdaxue.co/read/Putting-the-you-in-cpu/the-basic</p>\\n<h2>基础</h2>\\n<p>CPU执行的“指令”只是二进制数据。</p>\\n<p></p>\\n<p>CPU 始终直接从 RAM 读取机器代码，代码如果没有加载到 RAM 中是不能运行的。</p>\\n<p>CPU 存储了一个 <strong>指令指针</strong>，它指向 CPU 将要从 RAM 中获取下一条指令的位置。每执行一条指令后，CPU 移动指针并重复。这就是<strong>取指执行周期</strong>。</p>\\n<p>执行一条指令后，指针会向前移动到 RAM 中指令后面的地方，这样它现在就指向下一条指令。这就是代码运行的原因！</p>\"}")
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
