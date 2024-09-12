import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/将用户定位到他的前缀域名.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/%E5%B0%86%E7%94%A8%E6%88%B7%E5%AE%9A%E4%BD%8D%E5%88%B0%E4%BB%96%E7%9A%84%E5%89%8D%E7%BC%80%E5%9F%9F%E5%90%8D.html\",\"title\":\"如何将用户定位到他的前缀域名？\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 解析域名\",\"slug\":\"_1-解析域名\",\"link\":\"#_1-解析域名\",\"children\":[]},{\"level\":2,\"title\":\"2. 配置 Nginx\",\"slug\":\"_2-配置-nginx\",\"link\":\"#_2-配置-nginx\",\"children\":[]},{\"level\":2,\"title\":\"3. 配置 Laravel\",\"slug\":\"_3-配置-laravel\",\"link\":\"#_3-配置-laravel\",\"children\":[{\"level\":3,\"title\":\"3.1 设置 .env\",\"slug\":\"_3-1-设置-env\",\"link\":\"#_3-1-设置-env\",\"children\":[]},{\"level\":3,\"title\":\"3.2 创建中间件\",\"slug\":\"_3-2-创建中间件\",\"link\":\"#_3-2-创建中间件\",\"children\":[]},{\"level\":3,\"title\":\"3.3 注册中间件\",\"slug\":\"_3-3-注册中间件\",\"link\":\"#_3-3-注册中间件\",\"children\":[]},{\"level\":3,\"title\":\"3.4 在用户登录后设置子域名\",\"slug\":\"_3-4-在用户登录后设置子域名\",\"link\":\"#_3-4-在用户登录后设置子域名\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 确保用户的子域名\",\"slug\":\"_4-确保用户的子域名\",\"link\":\"#_4-确保用户的子域名\",\"children\":[]}],\"git\":{\"updatedTime\":1725977686000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"laravel/将用户定位到他的前缀域名.md\",\"excerpt\":\"\\n<h2>1. 解析域名</h2>\\n<p>在域名管理后台(例如阿里云域名管理后台)解析域名设置里添加一条 主机记录为 <code>*</code>，记录类型为 CNAME 域名，例如：<code>*.yourdomain.com</code></p>\\n<h2>2. 配置 Nginx</h2>\\n<p>确保你的 Nginx 配置支持子域名。在 Nginx 配置中，通常需要设置 server 块来处理不同的子域名。你可以设置一个通配符子域名以便处理所有用户的子域名请求。</p>\\n<div class=\\\"language-conf\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"conf\\\" data-title=\\\"conf\\\"><pre class=\\\"language-conf\\\"><code><span class=\\\"line\\\">server {</span>\\n<span class=\\\"line\\\">    listen 80; </span>\\n<span class=\\\"line\\\">    # listen 80 default_server;</span>\\n<span class=\\\"line\\\">    # listen 443 ssl http2 default_server;</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    server_name *.yourdomain.com; # 主要是这一条</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    root /var/www/your-laravel-app/public;</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    index index.php index.html index.htm;</span>\\n<span class=\\\"line\\\">    # index index.php index.html index.htm default.php default.htm default.html;</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    # 伪静态</span>\\n<span class=\\\"line\\\">    location / {</span>\\n<span class=\\\"line\\\">        # try_files $uri $uri/ /index.php?$query_string;</span>\\n<span class=\\\"line\\\">        try_files $uri $uri/ /index.php?$is_args$query_string;</span>\\n<span class=\\\"line\\\">        </span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    # 禁止访问的文件或目录</span>\\n<span class=\\\"line\\\">    # location ~ ^/(\\\\.user.ini|\\\\.htaccess|\\\\.git|\\\\.svn|\\\\.project|LICENSE|README.md)</span>\\n<span class=\\\"line\\\">    # {</span>\\n<span class=\\\"line\\\">    #     return 404;</span>\\n<span class=\\\"line\\\">    # }</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    location ~ \\\\.php$ {</span>\\n<span class=\\\"line\\\">        include snippets/fastcgi-php.conf;</span>\\n<span class=\\\"line\\\">        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock; # 或者对应的 PHP 版本</span>\\n<span class=\\\"line\\\">        fastcgi_index index.php;</span>\\n<span class=\\\"line\\\">        include fastcgi_params;</span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    location ~ /\\\\.ht {</span>\\n<span class=\\\"line\\\">        deny all;</span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\">}</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
