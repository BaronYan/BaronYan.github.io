<template><div><p>HTML 中的 <code v-pre>role</code> 和 <code v-pre>aria-*</code> 属性通常用于增强网页内容的可访问性（Accessibility，简称A11y）。
这些属性通常用于描述网页元素的语义信息和交互行为，以帮助辅助技术（如屏幕阅读器）理解和解释网页内容。</p>
<h2 id="role-属性" tabindex="-1"><a class="header-anchor" href="#role-属性"><span><code v-pre>role</code> 属性</span></a></h2>
<p><code v-pre>role</code> 属性<strong>用于指定元素在页面中扮演的角色</strong>，它可以将一个普通的 HTML 元素标记为具有特定语义的角色。例如，一个 <code v-pre>div</code> 元素可以通过 <code v-pre>role=&quot;navigation&quot;</code> 表示它是一个导航区域，即使它不是一个 <code v-pre>nav</code> 元素。</p>
<p>常见的 <code v-pre>role</code> 值包括：</p>
<ul>
<li><code v-pre>role=&quot;navigation&quot;</code>：表示导航区域</li>
<li><code v-pre>role=&quot;button&quot;</code>：表示按钮</li>
<li><code v-pre>role=&quot;alert&quot;</code>：表示警告或通知</li>
<li><code v-pre>role=&quot;dialog&quot;</code>：表示对话框</li>
</ul>
<h2 id="aria-属性" tabindex="-1"><a class="header-anchor" href="#aria-属性"><span><code v-pre>aria-*</code> 属性</span></a></h2>
<p><code v-pre>aria-*</code> 属性是一组属性，用于向元素添加额外的可访问性信息。它们一般以 <code v-pre>aria-</code> 开头，后接一个具体的描述性名称，用于指定元素的状态、性质或行为。</p>
<p>一些常见的 <code v-pre>aria-*</code> 属性包括：</p>
<ul>
<li><code v-pre>aria-labelledby</code>：指定元素的标题（通常是另一个元素的 ID）</li>
<li><code v-pre>aria-describedby</code>：指定元素的描述信息</li>
<li><code v-pre>aria-hidden</code>：指定元素是否对辅助技术隐藏</li>
<li><code v-pre>aria-checked</code>：指定复选框或单选按钮的选中状态</li>
<li><code v-pre>aria-haspopup</code>：指定元素是否具有弹出菜单或对话框</li>
</ul>
<p>这些属性可以单独使用，也可以与 <code v-pre>role</code> 属性结合使用，以提供更详细和准确的可访问性信息</p>
<p>通过使用 <code v-pre>role</code> 和 <code v-pre>aria-*</code> 属性，开发者可以显著提高网站的可访问性，使其更易于理解和使用，特别是对于使用辅助技术的用户群体。</p>
</div></template>


