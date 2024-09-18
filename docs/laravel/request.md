


## `$request->path()`

这行代码会获取当前请求的 URL 路径。让我为您详细解释一下：

`$request->path()` 方法会返回当前请求的 URL 路径，不包括域名和查询字符串。例如：
1. 如果完整 URL 是 https://example.com/user/profile?id=123，$path 将会是 "user/profile"。
2. 如果 URL 是 https://example.com/admin/dashboard，$path 将会是 "admin/dashboard"。
3. 对于网站的根路径，如 https://example.com，$path 将会是空字符串 ""。

