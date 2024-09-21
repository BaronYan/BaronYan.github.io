
# ReflectionClass

`ReflectionClass` 类是 PHP 反射 API 中的一个核心类，用于获取类的相关信息。

`ReflectionClass` 的主要功能：

1. 检查类的结构
2. 获取类的属性、方法、常量等信息
3. 创建类的实例
4. 调用类的方法，包括私有和受保护的方法

## 主要方法和用途

### 构造函数

```php
$reflection = new ReflectionClass('ClassName');
// 或
$reflection = new ReflectionClass($object);
```

### 获取类的基本信息：
- `getName()`: 获取类名
- `getNamespaceName()`: 获取命名空间
- `getFileName()`: 获取定义类的文件名

### 检查类的特性：
- `isAbstract()`: 是否是抽象类
- `isFinal()`: 是否是终结类
- `isInterface()`: 是否是接口
- `isTrait()`: 是否是 trait

### 获取类的结构信息

- `getMethods()`: 获取所有方法
- `getProperties()`: 获取所有属性
- `getConstants()`: 获取所有常量
- `getConstructor()`: 获取构造函数
- `getParentClass()`: 获取父类

```php
// 获取所有公共方法
$methods = $reflection->getMethods(ReflectionMethod::IS_PUBLIC);
foreach ($methods as $method) {
    echo $method->getName() . "\n";
}

// 获取类的所有常量
$constants = $reflection->getConstants();
foreach ($constants as $name => $value) {
    echo "$name: $value\n";
}
```
### 创建实例：
- `newInstance()`: 创建新实例（调用构造函数）
- `newInstanceWithoutConstructor()`: 创建新实例（不调用构造函数）

```php
// 创建类的实例并调用私有方法
$reflection = new ReflectionClass('MyClass');
$instance = $reflection->newInstance();
$method = $reflection->getMethod('privateMethod');
$method->setAccessible(true);
$method->invoke($instance);
```
### 检查和操作特定元素：
- `hasMethod($name)`: 检查是否有特定方法
- `hasProperty($name)`: 检查是否有特定属性
- `hasConstant($name)`: 检查是否有特定常量
- `getMethod($name)`: 获取特定方法的 ReflectionMethod 对象
- `getProperty($name)`: 获取特定属性的 ReflectionProperty 对象
- `getConstant($name)`: 获取特定常量的值

```php
$reflection = new ReflectionClass('MyClass');
// 检查类是否有特定方法
if ($reflection->hasMethod('someMethod')) {
    echo "MyClass has someMethod";
}
```
### 其他有用的方法：
- `getDocComment()`: 获取类的文档注释
- `getTraits()`: 获取类使用的所有 traits
- `isSubclassOf($class)`: 检查是否是某个类的子类

```php
if ($reflection->isSubclassOf('ParentClass')) {
    echo "This class extends ParentClass";
}
```
`ReflectionClass` 在框架开发、单元测试、依赖注入容器等场景中非常有用。它允许我们在运行时动态地检查和操作类，这在处理未知或动态生成的代码时特别有价值。

然而，使用反射 API 也有一些注意事项：
- 性能开销：反射操作比直接的代码调用要慢。
- 安全性：反射可以绕过访问控制，需要谨慎使用。
- 可读性：过度使用反射可能使代码难以理解和维护。

总的来说，`ReflectionClass` 是一个强大的工具，能够提供极大的灵活性，但应该在适当的场景下谨慎使用。