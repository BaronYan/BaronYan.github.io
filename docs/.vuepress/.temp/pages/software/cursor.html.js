import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/software/cursor.html.vue"
const data = JSON.parse("{\"path\":\"/software/cursor.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726085164000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"software/cursor.md\",\"excerpt\":\"<p><code>⌘ + Enter</code> 选中整个代码库作为 Context</p>\\n<p>在 Cursor 对话中，<code>⌘ + Enter</code> 命令支持代码库嵌入，以提供更好的回答</p>\\n<p>发散一下思维，代码库也可以是文本或其他数字资产。比如这个例子 <code>https://x.com/xiaokedada/status/1832794562261389787</code>,在 cursor 中打开 obsidian 笔记本，然后基于当前的笔记，进行问答。</p>\\n<p>@ 符号</p>\\n<p>与 cursor 对话中，键入 @ 可以添加多种类型的资料作为 Context。</p>\"}")
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
