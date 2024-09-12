import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/demo/print/print1.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/demo/print/print1.html\",\"title\":\"快递面单打印雏形\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 初始化项目\",\"slug\":\"_1-初始化项目\",\"link\":\"#_1-初始化项目\",\"children\":[]},{\"level\":2,\"title\":\"2. 完整代码\",\"slug\":\"_2-完整代码\",\"link\":\"#_2-完整代码\",\"children\":[{\"level\":3,\"title\":\"2.1 main.js\",\"slug\":\"_2-1-main-js\",\"link\":\"#_2-1-main-js\",\"children\":[]},{\"level\":3,\"title\":\"2.2 App.vue\",\"slug\":\"_2-2-app-vue\",\"link\":\"#_2-2-app-vue\",\"children\":[]},{\"level\":3,\"title\":\"2.3 ExpressLabelForm.vue\",\"slug\":\"_2-3-expresslabelform-vue\",\"link\":\"#_2-3-expresslabelform-vue\",\"children\":[]},{\"level\":3,\"title\":\"2.4 ExpressLabelPreview.vue\",\"slug\":\"_2-4-expresslabelpreview-vue\",\"link\":\"#_2-4-expresslabelpreview-vue\",\"children\":[]},{\"level\":3,\"title\":\"2.5 ExpressLabelPrinter.vue\",\"slug\":\"_2-5-expresslabelprinter-vue\",\"link\":\"#_2-5-expresslabelprinter-vue\",\"children\":[]},{\"level\":3,\"title\":\"2.6 fakeDataGenerator.js\",\"slug\":\"_2-6-fakedatagenerator-js\",\"link\":\"#_2-6-fakedatagenerator-js\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726110267000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"vue3/demo/print/print1.md\",\"excerpt\":\"\\n<h2>1. 初始化项目</h2>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token comment\\\"># 初始化项目</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> create vue@latest ./</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 安装依赖 https://lindell.me/JsBarcode/</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> <span class=\\\"token function\\\">install</span> jsbarcode</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># npm install -D sass-embedded</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
