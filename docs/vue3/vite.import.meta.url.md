# import.meta.url 简介

[import.meta.url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) 是一个 ESM 的原生功能，会暴露当前模块的 URL。
将它与原生的 [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL) 构造器 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：

```js
const imgUrl = new URL('./img.png', import.meta.url).href
document.getElementById('hero-img').src = imgUrl
```

这在现代浏览器中能够原生使用 - 实际上，Vite 并不需要在开发阶段处理这些代码！

这个模式同样还可以通过字符串模板支持动态 URL：

```js
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}

```

在生产构建时，Vite 才会进行必要的转换保证 URL 在打包和资源哈希后仍指向正确的地址。然而，这个 URL 字符串必须是静态的，这样才好分析。否则代码将被原样保留、因而在 `build.target` 不支持 `import.meta.url` 时会导致运行时错误。

```js
// Vite 不会转换这个
const imgUrl = new URL(imagePath, import.meta.url).href
```

`import.meta.url` 在浏览器和 Node.js 中有不同的语义。


## URL

URL() 构造函数返回一个新创建的 URL 对象，该对象表示由参数定义的 URL。

如果给定的基本 URL 或生成的 URL 不是有效的 URL，则会抛出 JavaScript TypeError 异常。

语法：
```js
new URL(url)
new URL(url, base)
```
- `url`  
    一个表示绝对或相对 URL 的 DOMString 或任何具有字符串化方法的对象，例如 `<a>` 或 `<area>` 元素。如果` url` 是相对 URL，则会将 `base` 用作基准 URL。如果 `url` 是绝对 URL，则无论参数 `base` 是否存在，都将被忽略。
- `base` 可选  
    一个表示基准 URL 的字符串，当 `url` 为相对 URL 时，它才会生效。如果未指定，它默认为 `undefined`