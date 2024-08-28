
# 快速认识 curl

curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。

它的功能非常强大，命令行参数多达几十种。如果熟练的话，完全可以取代 Postman 这一类的图形界面工具。

https://www.ruanyifeng.com/blog/2019/09/curl-reference.html

```bash
# 不带有任何参数时，curl 就是发出 GET 请求。
curl https://www.example.com

# -b参数用来向服务器发送 Cookie。
curl -b 'foo=bar' https://google.com

# -d参数用于发送 POST 请求的数据体。
curl -d'login=emma＆password=123'-X POST https://google.com/login
# 使用-d参数以后，HTTP 请求会自动加上标头Content-Type : application/x-www-form-urlencoded。并且会自动将请求转为 POST 方法，因此可以省略-X POST。

# -e参数用来设置 HTTP 的标头Referer，表示请求的来源。
curl -e 'https://google.com?q=example' https://www.example.com

# -H参数可以通过直接添加标头Referer，达到同样效果。
curl -H 'Referer: https://google.com?q=example' https://www.example.com

# -i参数打印出服务器回应的 HTTP 标头。
curl -i https://www.example.com
# 上面命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码。

# -I参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。
curl -I https://www.example.com
# 上面命令输出服务器对 HEAD 请求的回应。 --head参数等同于-I。

# -k参数指定跳过 SSL 检测。
curl -k https://www.example.com
# 上面命令不会检查服务器的 SSL 证书是否正确。

# -L参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux

# -o参数将服务器的回应保存成文件，等同于wget命令。
curl -o example.html https://www.example.com
# 上面命令将www.example.com保存成example.html。
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc
# 上面命令将 chsrc-x64-linux 保存成 chsrc。

curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc; chmod +x ./chsrc
# 上面命令将 chsrc-x64-linux 保存成 chsrc。然后设置 chsrc 的权限为对所有人可执行
```