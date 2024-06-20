export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/%E9%83%A8%E7%BD%B2.html", { loader: () => import(/* webpackChunkName: "部署.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/部署.html.js"), meta: {"title":""} }],
  ["/Vuejs%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0/3.Vue.js%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF.html", { loader: () => import(/* webpackChunkName: "Vuejs的设计与实现_3.Vue.js的设计思路.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/Vuejs的设计与实现/3.Vue.js的设计思路.html.js"), meta: {"title":""} }],
  ["/Vuejs%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0/", { loader: () => import(/* webpackChunkName: "Vuejs的设计与实现_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/Vuejs的设计与实现/index.html.js"), meta: {"title":""} }],
  ["/css/", { loader: () => import(/* webpackChunkName: "css_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/index.html.js"), meta: {"title":"Home"} }],
  ["/css/margin.inline.html", { loader: () => import(/* webpackChunkName: "css_margin.inline.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/margin.inline.html.js"), meta: {"title":"margin-inline"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "posts_archive1.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"_blog":{"title":"Archive Article1","author":"","date":"1998-01-01T00:00:00.000Z","category":["History"],"tag":["WWI"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article1"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "posts_archive2.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"_blog":{"title":"Archive Article2","author":"","date":"1998-01-02T00:00:00.000Z","category":["History"],"tag":["WWII"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article2"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"Article 1","author":"","date":"2022-01-01T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 1"} }],
  ["/posts/article10.html", { loader: () => import(/* webpackChunkName: "posts_article10.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article10.html.js"), meta: {"_blog":{"title":"Article 10","author":"","date":"2022-01-10T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 10"} }],
  ["/posts/article11.html", { loader: () => import(/* webpackChunkName: "posts_article11.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article11.html.js"), meta: {"_blog":{"title":"Article 11","author":"","date":"2022-01-11T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 11"} }],
  ["/posts/article12.html", { loader: () => import(/* webpackChunkName: "posts_article12.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article12.html.js"), meta: {"_blog":{"title":"Article 12","author":"","date":"2022-01-12T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 12"} }],
  ["/posts/article2.html", { loader: () => import(/* webpackChunkName: "posts_article2.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article2.html.js"), meta: {"_blog":{"title":"Article 2","author":"","date":"2022-01-02T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 2"} }],
  ["/posts/article3.html", { loader: () => import(/* webpackChunkName: "posts_article3.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article3.html.js"), meta: {"_blog":{"title":"Article 3","author":"","date":"2022-01-03T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 3"} }],
  ["/posts/article4.html", { loader: () => import(/* webpackChunkName: "posts_article4.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article4.html.js"), meta: {"_blog":{"title":"Article 4","author":"","date":"2022-01-04T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 4"} }],
  ["/posts/article5.html", { loader: () => import(/* webpackChunkName: "posts_article5.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article5.html.js"), meta: {"_blog":{"title":"Article 5","author":"","date":"2022-01-05T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 5"} }],
  ["/posts/article6.html", { loader: () => import(/* webpackChunkName: "posts_article6.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article6.html.js"), meta: {"_blog":{"title":"Article 6","author":"","date":"2022-01-06T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 6"} }],
  ["/posts/article7.html", { loader: () => import(/* webpackChunkName: "posts_article7.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article7.html.js"), meta: {"_blog":{"title":"Article 7","author":"","date":"2022-01-07T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 7"} }],
  ["/posts/article8.html", { loader: () => import(/* webpackChunkName: "posts_article8.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article8.html.js"), meta: {"_blog":{"title":"Article 8","author":"","date":"2022-01-08T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 8"} }],
  ["/posts/article9.html", { loader: () => import(/* webpackChunkName: "posts_article9.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/article9.html.js"), meta: {"_blog":{"title":"Article 9","author":"","date":"2022-01-09T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 9"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "posts_sticky.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"Sticky Article","author":"","date":"2021-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"<p>A sticky article demo.</p>"},"title":"Sticky Article"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "posts_sticky2.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"Sticky Article with Higher Priority","author":"","date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"\n<p>Excerpt information which is added manually.</p>\n"},"title":"Sticky Article with Higher Priority"} }],
  ["/vue3/createVNode.html", { loader: () => import(/* webpackChunkName: "vue3_createVNode.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/createVNode.html.js"), meta: {"title":"createVNode"} }],
  ["/vue3/", { loader: () => import(/* webpackChunkName: "vue3_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/index.html.js"), meta: {"title":"vue3"} }],
  ["/vue3/vnode.component.html", { loader: () => import(/* webpackChunkName: "vue3_vnode.component.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/vnode.component.html.js"), meta: {"title":"vnode.component"} }],
  ["/vue3/vnode_vnode.component.html", { loader: () => import(/* webpackChunkName: "vue3_vnode_vnode.component.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/vnode_vnode.component.html.js"), meta: {"title":"vnode.component"} }],
  ["/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "vue3_封装Message组件.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/封装Message组件.html.js"), meta: {"title":"封装一个 Message 组件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/history/", { loader: () => import(/* webpackChunkName: "category_history_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/category/history/index.html.js"), meta: {"title":"Category History"} }],
  ["/category/categorya/", { loader: () => import(/* webpackChunkName: "category_categorya_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/category/categorya/index.html.js"), meta: {"title":"Category CategoryA"} }],
  ["/category/categoryb/", { loader: () => import(/* webpackChunkName: "category_categoryb_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/category/categoryb/index.html.js"), meta: {"title":"Category CategoryB"} }],
  ["/category/categoryc/", { loader: () => import(/* webpackChunkName: "category_categoryc_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/category/categoryc/index.html.js"), meta: {"title":"Category CategoryC"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/wwi/", { loader: () => import(/* webpackChunkName: "tag_wwi_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/wwi/index.html.js"), meta: {"title":"Tag WWI"} }],
  ["/tag/wwii/", { loader: () => import(/* webpackChunkName: "tag_wwii_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/wwii/index.html.js"), meta: {"title":"Tag WWII"} }],
  ["/tag/tag-a/", { loader: () => import(/* webpackChunkName: "tag_tag-a_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/tag-a/index.html.js"), meta: {"title":"Tag tag A"} }],
  ["/tag/tag-b/", { loader: () => import(/* webpackChunkName: "tag_tag-b_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/tag-b/index.html.js"), meta: {"title":"Tag tag B"} }],
  ["/tag/tag-c/", { loader: () => import(/* webpackChunkName: "tag_tag-c_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/tag-c/index.html.js"), meta: {"title":"Tag tag C"} }],
  ["/tag/tag-d/", { loader: () => import(/* webpackChunkName: "tag_tag-d_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/tag-d/index.html.js"), meta: {"title":"Tag tag D"} }],
  ["/tag/tag-e/", { loader: () => import(/* webpackChunkName: "tag_tag-e_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/tag/tag-e/index.html.js"), meta: {"title":"Tag tag E"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);
