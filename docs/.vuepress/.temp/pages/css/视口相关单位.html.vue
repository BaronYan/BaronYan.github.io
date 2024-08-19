<template><div><p>在 CSS 世界中，有 <code v-pre>vw</code>、<code v-pre>vh</code>、<code v-pre>vmax</code>、<code v-pre>vmin</code> 这几个与视口 Viewport 相关的单位。</p>
<p>正常而言：</p>
<ul>
<li><code v-pre>1vw</code> 等于 <code v-pre>1/100</code> 的视口宽度 （Viewport Width）</li>
<li><code v-pre>1vh</code> 等于 <code v-pre>1/100</code> 的视口高度 （Viewport Height）</li>
<li><code v-pre>vmin</code> — <code v-pre>vmin</code> 的值是当前 <code v-pre>vw</code> 和 <code v-pre>vh</code> 中较小的值</li>
<li><code v-pre>vmax</code> — <code v-pre>vw</code> 和 <code v-pre>vh</code> 中较大的值</li>
</ul>
<p>但是，在移动端，情况就不太一样了。<code v-pre>100vh</code> 不总是等于一屏幕的高度。有的时候，<code v-pre>100vh</code> 高度会出现滚动条。</p>
<p>根因在于：</p>
<ol>
<li>很多浏览器，在计算 <code v-pre>100vh</code> 的高度的时候，会把地址栏等相关控件的高度计算在内</li>
<li>同时，很多时候，由于会弹出软键盘等操作，在弹出的过程中，<code v-pre>100vh</code> 的计算值并不会实时发生变化！</li>
</ol>
<p>这也就变相导致了许多基于 <code v-pre>100vh</code> 想实现的效果无形中会产生很多问题。</p>
<p><strong>新视口相关单位之 <code v-pre>lvh</code>、<code v-pre>svh</code>、<code v-pre>dvh</code></strong></p>
<p>为了解决上述的问题，规范新推出了三类单位，分别是：</p>
<ol>
<li>The large viewport units（大视口单位）：<code v-pre>lvw</code>,<code v-pre>lvh</code>, <code v-pre>lvi</code>, <code v-pre>lvb</code>, <code v-pre>lvmin</code>, and <code v-pre>lvmax</code></li>
<li>The small viewport units（小视口单位）：<code v-pre>svw</code>, <code v-pre>svh</code>, <code v-pre>svi</code>, <code v-pre>svb</code>, <code v-pre>svmin</code>, and <code v-pre>svmax</code></li>
<li>The dynamic viewport units（动态视口单位）：<code v-pre>dvw</code>, <code v-pre>dvh</code>, <code v-pre>dvi</code>, <code v-pre>dvb</code>, <code v-pre>dvmin</code>, and <code v-pre>dvmax</code></li>
</ol>
<p>别看看上去很多，其实很好记忆，<code v-pre>vw</code>/<code v-pre>vw</code>/<code v-pre>vmax</code>/<code v-pre>vmin</code> 的前缀是 v，而：</p>
<ol>
<li>大视口单位的前缀是 <code v-pre>lv</code> ，意为 large viewport</li>
<li>小视口单位的前缀是 <code v-pre>sv</code> ，意为 small viewport</li>
<li>动态视口单位的前缀是 <code v-pre>dv</code> ，意为 dynamic viewport</li>
</ol>
<p>这里我们着重关注 <code v-pre>lvh</code> 、<code v-pre>svh</code> 、<code v-pre>dvh</code>。它们三者与 <code v-pre>vh</code> 有什么异同呢？</p>
<p>先来看大视口与小视口，规范对它们的定义是：</p>
<ol>
<li>大视口（Large Viewport）：视口大小假设任何动态扩展和缩回的 UA 界面都没有展开</li>
<li>小视口（Small Viewport）：视口大小假设任何动态扩展和缩回的 UA 界面都展开了</li>
</ol>
<p><img src="@source/images/20240819001.png" alt="lvh&amp;svh"></p>
<p>理解了大视口与小视口之后，再理解动态视口就轻松了些。</p>
<p>简单而言，动态视口的意思是：</p>
<ul>
<li>动态工具栏展开时，动态视口等于小视口的大小</li>
<li>当动态工具栏被缩回时，动态视口等于大视口的大小</li>
</ul>
<p>因此，也就能得到下面这张图：</p>
<p><img src="@source/images/20240819002.png" alt="d"></p>
<p>其中，<code v-pre>dvh</code>、<code v-pre>dvw</code>、<code v-pre>dvmax</code>、<code v-pre>dvmin</code> 对标 <code v-pre>vh</code>、<code v-pre>vw</code>、<code v-pre>vmax</code>、<code v-pre>vmin</code> 比较好理解。</p>
<p>剩下，<code v-pre>dvi</code> 和 <code v-pre>dvb</code> 解释一下。其实，在之前也有 <code v-pre>vi</code> 和 <code v-pre>vb</code> 两个单位：</p>
<ul>
<li><code v-pre>vi</code>：vi 代表 Viewport Inline，代表文档的内联方向。在水平书写方向上，这对应于视口的宽度，而在垂直书写方向上，这表示视口的高度。记住 inline 方向的简单方法是记住它与文本的方向相同。</li>
<li><code v-pre>vb</code>：vb 代表 Viewport block，代表文档的块方向。这与 vi 水平书写方向相反，这将对应于视口高度，而在垂直文档中，这将表示视口的宽度。</li>
</ul>
<p>因此，<code v-pre>vi</code> 和 <code v-pre>vb</code> 属于两个逻辑单位。</p>
<p>理解了 <code v-pre>vi</code> 与 <code v-pre>vb</code>，<code v-pre>dvi</code> 与 <code v-pre>dvb</code> 也就很好理解了，它们分别表示动态视口下的 Viewport Inline 与 Viewport block。同理去理解大视口、小视口下的 <code v-pre>lvi</code>、<code v-pre>lvb</code>、<code v-pre>dvi</code>、<code v-pre>dvb</code>。</p>
<p>简单再总结一下，本文通过 vh 在移动存在的问题入手，引出了规范新增的三大类新的和视口相关的单位。分别是：</p>
<ol>
<li>大视口（Large Viewport）</li>
<li>小视口（Small Viewport）</li>
<li>动态视口（dynamic viewport）</li>
</ol>
<p>它们的出现，极大的弥补了之前 <code v-pre>vh</code>/<code v-pre>vw</code> 等视口单位存在的问题。CSS 的更新迭代一直在快速持续，很多内容还是有必要不断了解学习，在不久的将来就能很快应用在业务中。</p>
<p>此外，除了动态视口外，其实 CSS 还更新了与容器大小相关的相对单位 -- 譬如 <code v-pre>cqw</code> 和 <code v-pre>cqh</code>。</p>
<ul>
<li><code v-pre>cqw</code>：表示容器查询宽度（Container Query Width）占比。<code v-pre>1cqw</code> 等于容器宽度的 1%。假设容器宽度是 1000px，则此时<code v-pre>1cqw</code> 对应的计算值就是 10px</li>
<li><code v-pre>cqh</code>： 表示容器查询高度（Container Query Height）占比。<code v-pre>1cqh</code> 等于容器高度的 1%
容器查询：它给予了 CSS，在不改变浏览器视口宽度的前提下，只是根据容器的宽度变化，对布局做成调整的能力。</li>
</ul>
<p>也就是说，CSS 除了在视口这条路之外，也逐渐在扩充探索以及完善与容器大小变化相关的能力。</p>
</div></template>


