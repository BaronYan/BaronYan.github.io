
### 逻辑或&空值合并
<div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">|| 和 ?? 有什么区别？</div>

在 JavaScript 中，`||` 和 `??` 运算符的区别在于它们处理不同的假值：

1. `||` (逻辑或运算符):
   - 返回第一个真值（truthy）操作数。
   - 如果第一个操作数为假值（falsy，如 `0`、`""`、`false`、`NaN`、`null`、`undefined`），则返回第二个操作数。
2. `??` (空值合并运算符):
   - 仅在第一个操作数为 `null` 或 `undefined` 时返回第二个操作数。
   - 不会对 `0`、`""`、`false` 等其他假值触发。

示例：
```javascript
let a = 0;
let b = null;

console.log(a || 5);  // 输出: 5，因为 0 是假值
console.log(a ?? 5);  // 输出: 0，因为 0 不是 null 或 undefined

console.log(b || 5);  // 输出: 5，因为 null 是假值
console.log(b ?? 5);  // 输出: 5，因为 b 是 null
```

`||` 用于处理一般的假值，而 `??` 专门用于处理 `null` 和 `undefined`。

### 获取对象的类型
<div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">除了 `typeof` 之外，还有什么方法能知道一个对象的类型</div>

除了 `typeof` 之外，可以使用以下方法来获取对象的类型：

1. `instanceof` 运算符：
   - 检查一个对象是否是某个构造函数的实例。
      ```javascript
       // true if obj is an array
      console.log(obj instanceof Array);
      ```
2. `Object.prototype.toString.call()`：
   - 返回一个对象的类型字符串，常用于判断内置对象类型。
       ```javascript
       console.log(Object.prototype.toString.call(obj)); // [object Array]
       ```
3. `constructor` 属性：
   - 可以获取对象的构造函数。
     ```javascript
     console.log(obj.constructor === Array); // true if obj is an array
     ```
4. `Array.isArray()`： 
   - 专门用于判断是否为数组
     ```javascript
      console.log(Array.isArray(obj)); // true if obj is an array
     ```

这些方法可以帮助更准确地识别对象的类型，尤其是在复杂数据结构中。

### void 0

<div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">void 0; 是什么意思</div>

在 JavaScript 中，`void 0` 返回 `undefined`。这是因为 `void` 运算符会对其后面的表达式求值并返回 `undefined`。

**用途：**
1. 防止返回值：
   - 在某些上下文中使用 `void` 来确保一个表达式不返回任何值。
2. 安全地获取 `undefined`：
   - `void 0` 可以用来获取 `undefined` 值，而不用担心变量名 `undefined` 被重写（虽然现代 JavaScript 不推荐重写 undefined）。
3. 简洁性：
   - 在一些代码中，可以用 `void 0` 来代替 `undefined`，以避免变量被篡改的风险。

总的来说，`void 0` 是一种简洁、安全的方式来表示 `undefined`。