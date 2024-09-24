import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/多态.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/%E5%A4%9A%E6%80%81.html\",\"title\":\"什么是多态关系？\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"多态关系简介\",\"slug\":\"多态关系简介\",\"link\":\"#多态关系简介\",\"children\":[]},{\"level\":2,\"title\":\"morphs 方法\",\"slug\":\"morphs-方法\",\"link\":\"#morphs-方法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]},{\"level\":2,\"title\":\"使用多态关系\",\"slug\":\"使用多态关系\",\"link\":\"#使用多态关系\",\"children\":[]},{\"level\":2,\"title\":\"总结：\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"laravel/多态.md\",\"excerpt\":\"\\n<p>在 Laravel 中，<code>$table-&gt;morphs('tokenable')</code> 是一种快捷方法，用于创建多态关系的字段。\\n具体来说，它会在数据库表中创建两个字段：<code>tokenable_id</code> 和 <code>tokenable_type</code>，用于存储多态关系的 ID 和类型。</p>\\n<h2>多态关系简介</h2>\\n<p>多态关系允许一个模型在单个关联中属于多个其他模型。</p>\\n<p>例如，一个 Comment 模型可以属于 Post 模型或 Video 模型。通过多态关系，可以在同一个表中存储不同类型的关联。</p>\\n\"}")
export { comp, data }
