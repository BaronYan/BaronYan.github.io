<template><div><h2 id="响应式-工具函数" tabindex="-1"><a class="header-anchor" href="#响应式-工具函数"><span>响应式: 工具函数</span></a></h2>
<ul>
<li><code v-pre>isRef()</code>
<ul>
<li>检查某个值是否为 <code v-pre>ref</code>。</li>
</ul>
</li>
<li><code v-pre>isProxy()</code>
<ul>
<li>检查一个对象是否是由 <code v-pre>reactive()</code>、<code v-pre>readonly()</code>、<code v-pre>shallowReactive()</code> 或 <code v-pre>shallowReadonly()</code> 创建的代理。</li>
</ul>
</li>
<li><code v-pre>isReactive()</code>
<ul>
<li>检查一个对象是否是由 <code v-pre>reactive()</code> 或 <code v-pre>shallowReactive()</code> 创建的代理。</li>
</ul>
</li>
<li><code v-pre>isReadonly()</code>
<ul>
<li>检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。</li>
</ul>
</li>
<li><code v-pre>unref()</code>
<ul>
<li>如果参数是 <code v-pre>ref</code>，则返回内部值，否则返回参数本身。这是 <code v-pre>val = isRef(val) ? val.value : val</code> 计算的一个语法糖。</li>
</ul>
</li>
<li><code v-pre>toRef()</code>
<ul>
<li>可以将值、<code v-pre>refs</code> 或 <code v-pre>getters</code> 规范化为 refs (3.3+)。也可以基于响应式对象上的一个属性，创建一个对应的 <code v-pre>ref</code>。这样创建的 <code v-pre>ref</code> 与其源属性保持同步：改变源属性的值将更新 <code v-pre>ref</code> 的值，反之亦然。</li>
</ul>
</li>
<li><code v-pre>toRefs()</code>
<ul>
<li>将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。</li>
</ul>
</li>
<li><code v-pre>toValue()</code>
<ul>
<li><code v-pre>toValue()</code> 的设计目的是将 <code v-pre>ref</code> 或 <code v-pre>getter</code> 规范化为值。如果参数是 <code v-pre>ref</code>，它会返回 <code v-pre>ref</code> 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 <code v-pre>unref()</code>，但对函数有特殊处理。</li>
</ul>
</li>
</ul>
<h2 id="响应式-进阶函数" tabindex="-1"><a class="header-anchor" href="#响应式-进阶函数"><span>响应式：进阶函数</span></a></h2>
<p>https://cn.vuejs.org/api/reactivity-advanced.html#shallowref</p>
</div></template>


