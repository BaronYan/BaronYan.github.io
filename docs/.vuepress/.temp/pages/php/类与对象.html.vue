<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<ul>
<li>PHP 对待对象的方式等同于引用或句柄，即每个变量都持有对象的引用，而不是整个对象的复制。</li>
<li>每个类的定义都以关键字 class 开头，后面跟着类名，后面跟着一对花括号，里面包含有类的属性与方法的定义。</li>
<li>一个类可以包含有属于自己的 常量，变量（称为“属性”）以及函数（称为“方法”）。</li>
<li>当一个方法在类定义内部被调用时，有一个可用的伪变量 <code v-pre>$this</code>。<code v-pre>$this</code> 是一个到当前对象的引用。</li>
<li>以静态方式去调用一个非静态方法，将会抛出一个 Error。同时 <code v-pre>$this</code> 将会被声明为未定义。</li>
</ul>
</div></template>


