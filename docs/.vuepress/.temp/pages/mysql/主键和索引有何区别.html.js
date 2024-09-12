import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/mysql/主键和索引有何区别.html.vue"
const data = JSON.parse("{\"path\":\"/mysql/%E4%B8%BB%E9%94%AE%E5%92%8C%E7%B4%A2%E5%BC%95%E6%9C%89%E4%BD%95%E5%8C%BA%E5%88%AB.html\",\"title\":\"在数据库中,主键和索引有何区别？\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"如何添加主键，如何添加索引？\",\"slug\":\"如何添加主键-如何添加索引\",\"link\":\"#如何添加主键-如何添加索引\",\"children\":[{\"level\":3,\"title\":\"添加主键\",\"slug\":\"添加主键\",\"link\":\"#添加主键\",\"children\":[]},{\"level\":3,\"title\":\"添加索引\",\"slug\":\"添加索引\",\"link\":\"#添加索引\",\"children\":[]},{\"level\":3,\"title\":\"注意事项：\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725757698000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"mysql/主键和索引有何区别.md\",\"excerpt\":\"\\n<p>主键和索引在数据库中都是用于优化查询性能的重要概念，但它们有一些关键的区别：</p>\\n<ol>\\n<li>定义和唯一性：\\n<ul>\\n<li>主键：每个表只能有一个主键，它唯一标识表中的每一行数据。</li>\\n<li>索引：一个表可以有多个索引，它们不一定是唯一的。</li>\\n</ul>\\n</li>\\n<li>数据完整性：\\n<ul>\\n<li>主键：强制保证数据的完整性，不允许 NULL 值或重复值。</li>\\n<li>索引：可以包含重复值和 NULL 值（除非被定义为唯一索引）。</li>\\n</ul>\\n</li>\\n<li>自动创建：\\n<ul>\\n<li>主键：数据库通常会自动为主键创建一个对应的索引。</li>\\n<li>索引：需要手动创建（除非是主键索引）。</li>\\n</ul>\\n</li>\\n<li>用途：\\n<ul>\\n<li>主键：主要用于唯一标识记录和建立表之间的关系（外键关联）。</li>\\n<li>索引：主要用于加速数据检索操作。</li>\\n</ul>\\n</li>\\n<li>存储结构：\\n<ul>\\n<li>主键：通常存储为聚集索引（clustered index），决定了表中数据的物理存储顺序。</li>\\n<li>索引：通常存储为非聚集索引（non-clustered index），不影响数据的物理存储顺序。</li>\\n</ul>\\n</li>\\n<li>性能影响：\\n<ul>\\n<li>主键：对插入和更新操作可能有较大影响，因为可能需要重新组织数据。</li>\\n<li>索引：主要影响查询性能，但过多的索引会影响插入、更新和删除操作的性能。</li>\\n</ul>\\n</li>\\n<li>强制性：\\n<ul>\\n<li>主键：虽然不是绝对必需，但大多数表都应该有主键以确保数据完整性。</li>\\n<li>索引：是可选的，根据查询需求添加。</li>\\n</ul>\\n</li>\\n<li>组合字段：\\n<ul>\\n<li>主键：可以是单个字段，也可以是多个字段的组合（复合主键）。</li>\\n<li>索引：同样可以是单个字段或多个字段的组合。</li>\\n</ul>\\n</li>\\n<li>外键关系：\\n<ul>\\n<li>主键：常用作其他表的外键引用目标。</li>\\n<li>索引：不直接用于外键关系，但外键列通常建议创建索引以提高查询性能。</li>\\n</ul>\\n</li>\\n<li>数据库维护：\\n<ul>\\n<li>主键：更改主键通常是一个复杂的操作，可能需要重构数据库结构。</li>\\n<li>索引：可以相对容易地添加、修改或删除，不会影响表的结构。</li>\\n</ul>\\n</li>\\n</ol>\"}")
export { comp, data }
