import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/linux/chmod.html.vue"
const data = JSON.parse("{\"path\":\"/linux/chmod.html\",\"title\":\"快速认识 chmod\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"git\":{\"updatedTime\":1724859467000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"linux/chmod.md\",\"excerpt\":\"\\n<p>chmod (change mode) 命令是控制用户对文件的权限的命令</p>\\n<p>Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。</p>\\n<p></p>\\n<p>只有文件 <strong>所有者和超级用户</strong> 可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。</p>\\n<p></p>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token comment\\\"># 语法</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">chmod</span> <span class=\\\"token punctuation\\\">[</span>-cfvR<span class=\\\"token punctuation\\\">]</span> <span class=\\\"token punctuation\\\">[</span>--help<span class=\\\"token punctuation\\\">]</span> <span class=\\\"token punctuation\\\">[</span>--version<span class=\\\"token punctuation\\\">]</span> mode file<span class=\\\"token punctuation\\\">..</span>.</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 参数说明</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># mode : 权限设定字串，格式如下 :</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># [ugoa...][[+-=][rwxX]...][,...]</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
