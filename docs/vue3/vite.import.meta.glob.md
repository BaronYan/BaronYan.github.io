

# Glob 导入

https://cn.vitejs.dev/guide/features#glob-import

Vite 支持使用 `import.meta.glob` 函数从文件系统导入多个模块：

```js
const modules = import.meta.glob('./dir/*.js')
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js'),
}
// 你可以遍历 modules 对象的 key 值来访问相应的模块：
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
```
## 直接引入

匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块，你可以传入 `{ eager: true }` 作为第二个参数：
```js
const modules = import.meta.glob('./dir/*.js', { eager: true })
// vite 生成的代码
import * as __glob__0_0 from './dir/foo.js'
import * as __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
}
```

## 多个匹配模式

```js
// 第一个参数可以是一个 glob 数组，例如：
const modules = import.meta.glob(['./dir/*.js', './another/*.js'])
```

## 反面匹配模式
同样也支持反面 glob 匹配模式（以 `!` 作为前缀）。
```js
const modules = import.meta.glob(['./dir/*.js', '!**/bar.js'])
```

## 具名导入

也可能你只想要导入模块中的部分内容，那么可以利用 `import` 选项。

```js
const modules = import.meta.glob('./dir/*.js', { import: 'setup' })
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js').then((m) => m.setup),
  './dir/bar.js': () => import('./dir/bar.js').then((m) => m.setup),
}

// 设置 import 为 default 可以加载默认导出。
const modules = import.meta.glob('./dir/*.js', {
  import: 'default',
  eager: true,
})
// vite 生成的代码
import __glob__0_0 from './dir/foo.js'
import __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
}
```

