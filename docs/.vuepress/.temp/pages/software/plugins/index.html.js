import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/software/plugins/index.html.vue"
const data = JSON.parse("{\"path\":\"/software/plugins/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"将 phpstorm 软链接到 ubuntu\",\"slug\":\"将-phpstorm-软链接到-ubuntu\",\"link\":\"#将-phpstorm-软链接到-ubuntu\",\"children\":[]}],\"git\":{\"updatedTime\":1725425675000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":3}]},\"filePathRelative\":\"software/plugins/index.md\",\"excerpt\":\"<p><a href=\\\"https://www.emmet.io/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">emmet</a></p>\\n<p><a href=\\\"https://code.visualstudio.com/docs/editor/emmet\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">visualstudio.emmet</a></p>\\n<h2>将 phpstorm 软链接到 ubuntu</h2>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token function\\\">sudo</span> <span class=\\\"token function\\\">ln</span> <span class=\\\"token parameter variable\\\">-s</span> /mnt/c/Users/yanbe/AppData/Local/Programs/Microsoft<span class=\\\"token punctuation\\\">\\\\</span> VS<span class=\\\"token punctuation\\\">\\\\</span> Code/bin/code /usr/bin/code</span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">sudo</span> <span class=\\\"token function\\\">ln</span> <span class=\\\"token parameter variable\\\">-s</span> /mnt/c/Program<span class=\\\"token punctuation\\\">\\\\</span> Files/JetBrains/PhpStorm<span class=\\\"token punctuation\\\">\\\\</span> <span class=\\\"token number\\\">2022.2</span>/bin/phpstorm64.exe /usr/bin/phps</span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">sudo</span> <span class=\\\"token function\\\">ln</span> <span class=\\\"token parameter variable\\\">-s</span> /mnt/c/Program<span class=\\\"token punctuation\\\">\\\\</span> Files/JetBrains/PhpStorm<span class=\\\"token punctuation\\\">\\\\</span> <span class=\\\"token number\\\">2022.1</span>.2/bin/phpstorm64.exe /etc/bin/phps</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
