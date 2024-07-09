## 介绍

- [Cache](https://laravel.com/docs/11.x/cache)

应用程序执行的某些数据检索或处理任务可能会占用大量 CPU 或需要几秒钟才能完成。
在这种情况下，通常会将检索到的数据缓存一段时间，以便在后续对相同数据的请求中快速检索这些数据。
缓存的数据通常存储在非常快速的数据存储中，例如 Memcached 或 Redis。

## Redis
在 Laravel 中使用 Redis 缓存之前，您需要通过 PECL 安装 `PhpRedis` 扩展或
通过 Composer 安装 `predis/predis` 软件包。

## 存储

1. 将项目存储在缓存中：
    ```php
    Cache::put('key', 'value', $seconds = 10);
    ```
2. **无限期存储**：如果未将存储时间传递给put方法，则该项目将被无限期存储
    ```php
    Cache::put('key', 'value');
    ```
3. **过期时间**：还可以传递一个 `DateTime` 表示缓存项所需过期时间的实例
    ```php
    Cache::put('key', 'value', now()->addMinutes(10));
    ```
4. **如果不存在则存储**：仅当缓存中尚不存在该项目时才将其添加到缓存中
    ```php
    Cache::add('key', 'value', $seconds);
    Cache::add('key', 0, now()->addHours(4));
    ```
5. **永久缓存**：必须使用 `forget` 方法手动将其从缓存中删除
    ```php
    Cache::forever('key', 'value');
    ```

## 检索
  - `Cache::get('key');`
  - `Cache::get('key', 'default');`
  - 如果缓存中不存在指定项，则将返回闭包的结果
    ```php
    $value = Cache::get('key', function () {
        return DB::table(/* ... */)->get();
    });
    ```
  - 判断项目是否存在 `Cache::has('key')`
  - 调整缓存中整数项的值，第二个参数指示增加或减少项值的量：
    - `Cache::increment('key');`
    - `Cache::increment('key', $amount);`
    - `Cache::decrement('key');`
    - `Cache::decrement('key', $amount);`

## 检索和存储

如果请求的项目不存在，则存储默认值
```php
$value = Cache::remember('users', $seconds, function () {
    return DB::table('users')->get();
});
```

从缓存中检索项目，如果不存在则永久存储它
```php
$value = Cache::rememberForever('users', function () {
    return DB::table('users')->get();
});
```
## 检索和删除

从缓存中检索项目然后删除该项目

```php
$value = Cache::pull('key');
 
$value = Cache::pull('key', 'default');
```


## 删除

```php
Cache::forget('key');
```

还可以通过提供零或负数的到期秒数来删除项目：
```php
Cache::put('key', 'value', 0);

Cache::put('key', 'value', -5);
```
可以使用 `flush` 方法清除整个缓存：
```php
Cache::flush();
```