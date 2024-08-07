<template><div><p><a href="https://www.youtube.com/shorts/vPL0vXeGIv4" target="_blank" rel="noopener noreferrer">grid</a></p>
<p><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">A Complete Guide to CSS Grid CSS 网格完全指南</a></p>
<p><a href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank" rel="noopener noreferrer">CSS Grid 网格布局教程</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout" target="_blank" rel="noopener noreferrer">网格布局的基本概念</a></p>
<p><a href="https://medium.com/enjoy-life-enjoy-coding/css-%E6%89%80%E4%BB%A5%E6%88%91%E8%AA%AA%E9%82%A3%E5%80%8B%E7%89%88%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A5%BD%E5%88%87%E4%B8%80%E9%BB%9E-grid-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-cd763091cf70" target="_blank" rel="noopener noreferrer">Grid 基本用法</a></p>
<h1 id="css-网格完整指南" tabindex="-1"><a class="header-anchor" href="#css-网格完整指南"><span>CSS 网格完整指南</span></a></h1>
<h2 id="css-网格简介" tabindex="-1"><a class="header-anchor" href="#css-网格简介"><span>CSS 网格简介</span></a></h2>
<p>网格布局是一种基于网格的二维布局系统。</p>
<ul>
<li>首先，必须使用 <code v-pre>display: grid</code> 将容器元素定义为网格，</li>
<li>使用 <code v-pre>grid-template-columns</code> 和 <code v-pre>grid-template-rows</code> 设置列和行大小，</li>
<li>然后使用 <code v-pre>grid-column</code> 和 <code v-pre>grid-row</code> 将其子元素放入网格中。</li>
<li>与弹性框类似，网格项的源顺序无关紧要。您的 CSS 可以按任何顺序放置它们，这使得使用媒体查询重新排列网格变得非常容易。</li>
</ul>
<p>想象一下，定义整个页面的布局，然后完全重新排列它以适应不同的屏幕宽度，而这一切只需要几行 CSS。 网格是有史以来最强大的 CSS 模块之一。</p>
<h2 id="重要术语" tabindex="-1"><a class="header-anchor" href="#重要术语"><span>重要术语</span></a></h2>
<ul>
<li>网格容器<br>
所应用 <code v-pre>display: grid</code> 的元素。它是所有网格项的直接父级。</li>
<li>网格线<br>
构成网格结构的分隔线。它们可以是垂直的（“列网格线”），也可以是水平的（“行网格线”），位于行或列的两侧。</li>
<li>网格轨道<br>
两条相邻网格线之间的空间。您可以将它们视为网格的列或行。</li>
<li>网格区域<br>
四条网格线包围的总空间。网格区域可以由任意数量的网格单元组成。</li>
<li>网格项<br>
网格容器的子元素（即直接后代）</li>
<li>网格单元<br>
相邻两行网格线和相邻两列网格线之间的空间。它是网格的一个“单位”。</li>
</ul>
<p><strong>网格线</strong>
<img src="@source/images/20240805001.svg" alt="网格线">
<strong>网格轨道</strong>
<img src="@source/images/20240805002.svg" alt="网格轨道">
<strong>网格区域</strong>
<img src="@source/images/20240805003.svg" alt="网格区域">
<strong>网格单元</strong>
<img src="@source/images/20240805004.svg" alt="网格单元"></p>
<h3 id="网格容器-的属性" tabindex="-1"><a class="header-anchor" href="#网格容器-的属性"><span>（网格容器）的属性</span></a></h3>
<ul>
<li>display</li>
<li>grid-template-columns</li>
<li>grid-template-rows</li>
<li>grid-template-areas</li>
<li>grid-template</li>
<li>grid-column-gap</li>
<li>grid-row-gap</li>
<li>grid-gap</li>
<li>justify-items</li>
<li>align-items</li>
<li>place-items</li>
<li>justify-content</li>
<li>align-content</li>
<li>place-content</li>
<li>grid-auto-columns</li>
<li>grid-auto-rows</li>
<li>grid-auto-flow</li>
<li>grid</li>
</ul>
<h3 id="网格项-的属性" tabindex="-1"><a class="header-anchor" href="#网格项-的属性"><span>（网格项）的属性</span></a></h3>
<ul>
<li>grid-column-start</li>
<li>grid-column-end</li>
<li>grid-row-start</li>
<li>grid-row-end</li>
<li>grid-column</li>
<li>grid-row</li>
<li>grid-area</li>
<li>justify-self</li>
<li>align-self</li>
<li>place-self
网格属性
特殊单位和职能
流体柱片段
动画片</li>
</ul>
</div></template>


