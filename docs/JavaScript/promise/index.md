

### Promise.reject()

`Promise.reject()` 是 JavaScript 中 Promise 对象的一个静态方法，用于创建一个状态为 rejected 的 Promise 对象，并且可以指定拒绝的原因（即拒绝的理由）。

#### 语法

```javascript
Promise.reject(reason);
```
##### 参数
- `reason`：可选参数，表示 Promise 被拒绝的原因。通常是一个任意类型的值，用来描述拒绝的具体原因，比如一个 Error 对象、一个字符串或者其他任何值。

##### 返回值
一个新的 Promise 对象，状态为 rejected，并且拒绝原因为指定的 `reason`。

#### 示例用法

```javascript
// 使用字符串作为拒绝原因：
const reason = 'Something went wrong';
const rejectedPromise = Promise.reject(reason);

rejectedPromise.catch(error => {
    console.error('Promise rejected with reason:', error); // Promise rejected with reason: Something went wrong
});
```

```javascript
// 使用 Error 对象作为拒绝原因：
const error = new Error('Custom error message');
const rejectedPromise = Promise.reject(error);

rejectedPromise.catch(error => {
    console.error('Promise rejected with error:', error); // Promise rejected with error: Error: Custom error message
});

```

#### 注意事项

`Promise.reject()` 返回的 Promise 对象的状态为 rejected，这意味着它的 .then() 方法会立即调用其第二个参数（即 rejected 状态的处理函数），而不会调用第一个参数（resolved 状态的处理函数）。
如果不提供 reason 参数，Promise.reject() 会创建一个带有 undefined 原因的 rejected Promise。
这个方法通常用于在异步操作中显式地拒绝 Promise，以便捕获错误或者控制流程。