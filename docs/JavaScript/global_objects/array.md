---

---

### Array.prototype.filter()

`filter()` 创建一个新数组，其中包含通过指定函数测试的所有元素。这个方法不会改变原始数组，而是返回一个新的数组。

```javascript
const newArray = array.filter(function callback(currentValue, index, array) {
  // 返回 true 表示保留当前元素，false 表示移除当前元素
}, thisArg);

```