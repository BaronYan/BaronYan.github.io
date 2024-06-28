


**hasOwnProperty**

```javascript
export const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)

export const hasOwn = (obj, key) => Object.hasOwn(obj, key)
```

- `Object.hasOwn()`:静态方法,如果指定的对象自身有指定的属性，则返回 `true`。如果属性是继承的或者不存在，该方法返回 `false`。
- `Object.prototype.hasOwnProperty()`:实例方法
- `Object.hasOwn()` 旨在取代 `Object.prototype.hasOwnProperty()`
- `Function.prototype.call()`: 实例方法,以给定的 this 值和逐个提供的参数调用该函数

**语法**
```javascript
Object.hasOwn(obj, prop)

object1.hasOwnProperty(prop)

call(thisArg)
call(thisArg, arg1, arg2, /* …, */ argN)
```