



## Promise.resolve()

`Promise.resolve()` <span class="bg-fuchsia-300"> 是 JavaScript 中 Promise 对象的一个静态方法，
用于创建一个状态为 resolved 的 Promise 对象，并且可以指定解决（即成功）的值。</span>

### 语法
```javascript
Promise.resolve(value);
```
#### 参数
- value：可选参数，表示 Promise 解决（成功）时的返回值。可以是任意 JavaScript 值，包括对象、数组、原始值等。

#### 返回值

一个新的 Promise 对象，状态为 resolved，并且解决值为指定的 value。

### 示例用法
```javascript
// 使用普通值作为解决值
const resolvedPromise = Promise.resolve(42);

resolvedPromise.then(value => {
    // Promise resolved with value: 42
    console.log('Promise resolved with value:', value);
});

```

```javascript
// 使用对象作为解决值：
const data = { message: 'Hello, Promise!' };
const resolvedPromise = Promise.resolve(data);

resolvedPromise.then(value => {
    // Promise resolved with data: { message: 'Hello, Promise!' }
    console.log('Promise resolved with data:', value); 
});
```

```javascript
// 使用另一个 Promise 对象作为解决值（Promise chaining）
const otherPromise = new Promise((resolve, reject) => {
    resolve('Resolved from another Promise');
});

const resolvedPromise = Promise.resolve(otherPromise);

resolvedPromise.then(value => {
    // Resolved Promise resolved with: Resolved from another Promise
    console.log('Resolved Promise resolved with:', value); 
});

```
### 注意事项
- 如果 value 是一个 Promise 对象，则返回的 Promise 对象会直接采用该 Promise 的状态和值。
- 如果不提供任何参数，则 `Promise.resolve()` 返回一个立即解决的 Promise，解决值为 undefined。
- `Promise.resolve()` 方法使得创建 Promise 对象的过程更加简洁，特别是当需要处理已有值或者需要将某些值转化为 Promise 时，可以方便地使用该方法。
- 这个方法通常用于在异步操作中显式地解决 Promise，以便控制流程或者将已有值转化为 Promise。

## Promise.reject()

`Promise.reject()` <span class="bg-fuchsia-300">  是 JavaScript 中 Promise 对象的一个静态方法，
用于创建一个状态为 rejected 的 Promise 对象，并且可以指定拒绝的原因（即拒绝的理由）。</span>

reject /rɪˈdʒekt/

### 语法

```javascript
Promise.reject(reason);
```
#### 参数
- `reason`：可选参数，表示 Promise 被拒绝的原因。通常是一个任意类型的值，用来描述拒绝的具体原因，比如一个 Error 对象、一个字符串或者其他任何值。

#### 返回值
一个新的 Promise 对象，状态为 rejected，并且拒绝原因为指定的 `reason`。

### 示例用法

```javascript
// 使用字符串作为拒绝原因：
const reason = 'Something went wrong';
const rejectedPromise = Promise.reject(reason);

rejectedPromise.catch(error => {
    // Promise rejected with reason: Something went wrong
    console.error('Promise rejected with reason:', error);
});
```

```javascript
// 使用 Error 对象作为拒绝原因：
const error = new Error('Custom error message');
const rejectedPromise = Promise.reject(error);

rejectedPromise.catch(error => {
    // Promise rejected with error: Error: Custom error message
    console.error('Promise rejected with error:', error); 
});

```

### 注意事项

`Promise.reject()` 返回的 Promise 对象的状态为 rejected，这意味着
- 它的 `.then()` 方法<span class="bg-fuchsia-300">会立即调用其第二个参数（即 rejected 状态的处理函数），而不会调用第一个参数（resolved 状态的处理函数）。</span>
- 如果不提供 `reason` 参数，`Promise.reject()` 会创建一个带有 `undefined` 原因的 rejected Promise。
- 这个方法通常用于在异步操作中显式地拒绝 Promise，以便捕获错误或者控制流程。