```bash
composer create-project laravel/laravel thbGlobalLogistics --prefer-dist
cd thbGlobalLogistics
composer require barryvdh/laravel-debugbar --dev
php artisan vendor:publish
# 修改 config/debugbar.php
# 修改 .gitignore   [ignore  / ɪɡˈnɔː(r) / 忽视]
# 修改 config/app.php
#       timezone='UTC' =》timezone='Asia/Shanghai'


git init
git add .
git commit -m "项目初始化"

# 安装 breeze
composer require laravel/breeze --dev
# 设置 npm 源
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

rm -rf node_modules
rm -rf package-lock.json
yarn

# 安装多语言
php artisan lang:publish



composer require laravel/horizon
php artisan horizon:install
# http://127.0.0.1:8000/horizon/dashboard

# 安装 Laravel Reverb
php artisan install:broadcasting
php artisan reverb:install

```