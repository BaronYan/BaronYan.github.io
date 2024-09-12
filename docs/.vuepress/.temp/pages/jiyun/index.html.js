import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/jiyun/index.html.vue"
const data = JSON.parse("{\"path\":\"/jiyun/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"项目初始化\",\"slug\":\"项目初始化\",\"link\":\"#项目初始化\",\"children\":[]},{\"level\":2,\"title\":\"安装 Laravel Reverb\",\"slug\":\"安装-laravel-reverb\",\"link\":\"#安装-laravel-reverb\",\"children\":[{\"level\":3,\"title\":\"设置 reverb\",\"slug\":\"设置-reverb\",\"link\":\"#设置-reverb\",\"children\":[]},{\"level\":3,\"title\":\"实战练习\",\"slug\":\"实战练习\",\"link\":\"#实战练习\",\"children\":[]}]},{\"level\":2,\"title\":\"安装其他前端依赖\",\"slug\":\"安装其他前端依赖\",\"link\":\"#安装其他前端依赖\",\"children\":[]}],\"git\":{\"updatedTime\":1725369889000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":6}]},\"filePathRelative\":\"jiyun/index.md\",\"excerpt\":\"<h2>项目初始化</h2>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 创建项目</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">composer</span> create-project laravel/laravel thbGlobalLogistics --prefer-dist</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token builtin class-name\\\">cd</span> thbGlobalLogistics</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 安装多语言</span></span>\\n<span class=\\\"line\\\">php artisan lang:publish</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 安装 debugbar</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">composer</span> require barryvdh/laravel-debugbar <span class=\\\"token parameter variable\\\">--dev</span></span>\\n<span class=\\\"line\\\">php artisan vendor:publish</span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 修改 config/debugbar.php</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 修改 .gitignore   [ignore  / ɪɡˈnɔː(r) / 忽视]</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 修改 config/app.php</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#       timezone='UTC' =》timezone='Asia/Shanghai'</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 该软件包可生成辅助文件，使您的集成开发环境能提供准确的自动完成功能。 </span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 生成过程基于项目中的文件，因此它们始终是最新的。</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">composer</span> require <span class=\\\"token parameter variable\\\">--dev</span> barryvdh/laravel-ide-helper</span>\\n<span class=\\\"line\\\">php artisan ide-helper:generate</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 每次新增 model 的时候执行一次</span></span>\\n<span class=\\\"line\\\">php artisan ide-helper:models</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 加入 git 版本管理</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">git</span> init</span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">git</span> <span class=\\\"token function\\\">add</span> <span class=\\\"token builtin class-name\\\">.</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">git</span> commit <span class=\\\"token parameter variable\\\">-m</span> <span class=\\\"token string\\\">\\\"项目初始化\\\"</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">composer</span> require opcodesio/log-viewer</span>\\n<span class=\\\"line\\\">php artisan log-viewer:publish</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 安装 breeze</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">composer</span> require laravel/breeze <span class=\\\"token parameter variable\\\">--dev</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">git</span> <span class=\\\"token function\\\">add</span> <span class=\\\"token builtin class-name\\\">.</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">git</span> commit <span class=\\\"token parameter variable\\\">-m</span> <span class=\\\"token string\\\">\\\"安装breeze\\\"</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 如果下面操作失败，则设置 npm 源</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> config <span class=\\\"token builtin class-name\\\">set</span> registry https://registry.npmmirror.com</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">php artisan breeze:install</span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  ┌ Which Breeze stack would you like to install? ───────────────┐</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ○ Blade with Alpine                                        │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ○ Livewire (Volt Class API) with Alpine                    │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ○ Livewire (Volt Functional API) with Alpine               │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ○ React with Inertia                                       │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │ › ● Vue with Inertia                                         │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ○ API only                                                 │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  └──────────────────────────────────────────────────────────────┘</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  ┌ Would you like any optional features? ───────────────────────┐</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │ › ◻ Dark mode                                                │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ◻ Inertia SSR                                              │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ◻ TypeScript                                               │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  └──────────────────────────────────────────────────────────────┘</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  ┌ Which testing framework do you prefer? ──────────────────────┐</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │   ○ Pest                                                     │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  │ › ● PHPUnit                                                  │</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">#  └──────────────────────────────────────────────────────────────┘</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 切换 npm 为  yarn</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">rm</span> <span class=\\\"token parameter variable\\\">-rf</span> node_modules</span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">rm</span> <span class=\\\"token parameter variable\\\">-rf</span> package-lock.json</span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">yarn</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
