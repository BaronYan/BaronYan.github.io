export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[\"/\",{\"text\":\"JavaScript\",\"children\":[{\"text\":\"基础知识\",\"link\":\"/JavaScript/base/\"},{\"text\":\"JavaScript\",\"link\":\"/JavaScript/\"},{\"text\":\"dom\",\"link\":\"/JavaScript/dom/\"}]},{\"text\":\"Vue3\",\"link\":\"/vue3/\"},{\"text\":\"Vue的设计与实现\",\"link\":\"/Vuejs的设计与实现/\"},{\"text\":\"Category\",\"link\":\"/category/\"},{\"text\":\"Tag\",\"link\":\"/tag/\"},{\"text\":\"Timeline\",\"link\":\"/timeline/\"}],\"sidebar\":{\"/vue3/\":[{\"text\":\"基础知识\",\"children\":[{\"text\":\"ref&reactive\",\"link\":\"ref&reactive.md\"}]},{\"text\":\"虚拟节点\",\"children\":[{\"text\":\"虚拟节点介绍\",\"link\":\"vnode.md\"},{\"text\":\"component 属性\",\"link\":\"vnode.component.md\"},{\"text\":\"component.proxy\",\"link\":\"vnode.component.proxy.md\"}]}]},\"postcss\":{\"plugins\":{\"tailwindcss\":{},\"autoprefixer\":{}}},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
