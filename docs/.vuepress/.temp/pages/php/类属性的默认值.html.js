import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/类属性的默认值.html.vue"
const data = JSON.parse("{\"path\":\"/php/%E7%B1%BB%E5%B1%9E%E6%80%A7%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"常量表达式示例\",\"slug\":\"常量表达式示例\",\"link\":\"#常量表达式示例\",\"children\":[]}],\"git\":{\"updatedTime\":1720626799000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/类属性的默认值.md\",\"excerpt\":\"<p><strong>在 PHP 中，为什么类属性的默认值必须是常量表达式?</strong></p>\\n<p><span class=\\\"font-bold text-red-500\\\">在 PHP 中，类属性的默认值必须是常量表达式，这是为了确保属性的默认值在类定义时就能确定和分配，而不是在运行时动态计算。</span></p>\\n<p>具体原因如下：</p>\\n<ul>\\n<li><strong>性能考虑</strong>：类的定义通常发生在脚本加载阶段（即编译阶段），而不是运行阶段。使用常量表达式可以在编译阶段就确定属性的默认值，减少运行时的开销。</li>\\n<li><strong>一致性和可预测性</strong>：常量表达式确保了类属性的默认值在任何情况下都是确定的、可预测的。如果允许使用动态计算的表达式，默认值可能会根据运行时的不同情况发生变化，导致代码的行为变得难以预测和调试。</li>\\n<li><strong>内存优化</strong>：编译阶段确定的常量表达式可以更好地优化内存使用。例如，对于常量字符串或数字，PHP 引擎可以在内存中共享这些值，而不需要在每个类实例中重复存储。</li>\\n<li><strong>语法和实现简单化</strong>：强制使用常量表达式简化了 PHP 语言的语法和解释器的实现。处理动态表达式需要更复杂的解析和运行时处理机制，这会增加语言的复杂性和运行时开销。</li>\\n</ul>\"}")
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
