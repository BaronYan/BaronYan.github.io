## 项目初始化
```bash

# 创建项目
composer create-project laravel/laravel thbGlobalLogistics --prefer-dist

cd thbGlobalLogistics

# 安装多语言
php artisan lang:publish

# 安装 debugbar
composer require barryvdh/laravel-debugbar --dev
php artisan vendor:publish
# 修改 config/debugbar.php

# 修改 .gitignore   [ignore  / ɪɡˈnɔː(r) / 忽视]

# 修改 config/app.php
#       timezone='UTC' =》timezone='Asia/Shanghai'

# 加入 git 版本管理
git init
git add .
git commit -m "项目初始化"


composer require opcodesio/log-viewer
php artisan log-viewer:publish



# 安装 breeze
composer require laravel/breeze --dev
git add .
git commit -m "安装breeze"

# 如果下面操作失败，则设置 npm 源
npm config set registry https://registry.npmmirror.com

php artisan breeze:install
#  ┌ Which Breeze stack would you like to install? ───────────────┐
#  │   ○ Blade with Alpine                                        │
#  │   ○ Livewire (Volt Class API) with Alpine                    │
#  │   ○ Livewire (Volt Functional API) with Alpine               │
#  │   ○ React with Inertia                                       │
#  │ › ● Vue with Inertia                                         │
#  │   ○ API only                                                 │
#  └──────────────────────────────────────────────────────────────┘
#  ┌ Would you like any optional features? ───────────────────────┐
#  │ › ◻ Dark mode                                                │
#  │   ◻ Inertia SSR                                              │
#  │   ◻ TypeScript                                               │
#  └──────────────────────────────────────────────────────────────┘
#  ┌ Which testing framework do you prefer? ──────────────────────┐
#  │   ○ Pest                                                     │
#  │ › ● PHPUnit                                                  │
#  └──────────────────────────────────────────────────────────────┘

# 切换 npm 为  yarn
rm -rf node_modules
rm -rf package-lock.json
yarn
```

## 安装 Laravel Reverb

```bash
php artisan install:broadcasting
```
### 设置 reverb

系统会自动生成以下秘钥

```env
REVERB_APP_ID=310930
REVERB_APP_KEY=zvcqfn7k1gmb157ppvau
REVERB_APP_SECRET=mjuf9qczdzteyk3pqf4h
REVERB_HOST="localhost"
REVERB_PORT=8080
REVERB_SCHEME=http
```

启动环境
```bash
php artisan serve
yarn dev
```

### 实战练习

1. 创建一个订单

```bash
php artisan make:model Order -m
```


```php
// Migrations
Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->string('status');
    $table->string('order_no');
    $table->timestamps();
});


// DatabaseSeeder

Order::create([
    'status' => 'pending',
    'order_no' => 'test'
]);
```

```bash
php artisan migrate:refresh --seed
```

2. 创建一个事件

```bash
php artisan make:event OrderShipmentStatusUpdated
```

修改事件让其实现 `ShouldBroadcast` 接口

```php
<?php

namespace App\Events;

use App\Models\Order;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * 订单发货状态更新事件,实现 ShouldBroadcast 接口
 * 接收订单和状态
 */
class OrderShipmentStatusUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        private readonly Order $order,
        public ?string         $status = null
    )
    {
        $this->status = $status ?? $order->status;
    }

    /**
     * Get the channels the event should broadcast on.
     * 使用【自定义通道】来广播此事件：order.{id}
     * 
     * @return Channel|array
     */
    public function broadcastOn(): Channel|array
    {
        // 公共频道，私有频道用 PrivateChannel,并且还要在 config/channels.php 里设置频道权限
        return new Channel('orders.' . $this->order->id);
    }
}
```

3. 触发事件

```php
broadcast(new OrderShipmentStatusUpdated($order));
// 或者
OrderShipmentStatusUpdated::dispatch($order);
```
4. 监听事件
```js
Echo.channel('orders.1').listen('OrderShipmentStatusUpdated', (e) => {
    status.value = e.status;
})
```
5. 启动 reverb 服务器

```bash
php artisan reverb:start
```

## 安装其他前端依赖

```bash
yarn add nanoid
```

https://www.youtube.com/watch?v=gv9z1yv0_7k