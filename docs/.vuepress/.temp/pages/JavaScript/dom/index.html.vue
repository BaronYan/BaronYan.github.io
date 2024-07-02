<template><div><p><strong>Element.firstElementChild 和 Node.firstChild 有什么区别?</strong></p>
<p><code v-pre>Element.firstElementChild</code> 和 <code v-pre>Node.firstChild</code> 之间的区别在于<strong>它们返回的节点类型不同</strong>：</p>
<ol>
<li><code v-pre>Element.firstElementChild</code>:
<ul>
<li>返回的是第一个子元素节点（Element），忽略文本节点、注释节点等。</li>
<li>如果没有子元素，返回 <code v-pre>null</code>。</li>
</ul>
</li>
<li><code v-pre>Node.firstChild</code>:
<ul>
<li>返回的是第一个子节点，可以是元素节点、文本节点、注释节点等。</li>
<li>如果没有子节点，返回 <code v-pre>null</code>。</li>
</ul>
</li>
</ol>
<p>总结来说，<code v-pre>firstElementChild</code> 专注于子元素，而 <code v-pre>firstChild</code> 会返回任何类型的子节点。</p>
</div></template>


