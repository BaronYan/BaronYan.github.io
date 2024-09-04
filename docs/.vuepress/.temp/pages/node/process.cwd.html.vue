<template><div><h1 id="process-cwd" tabindex="-1"><a class="header-anchor" href="#process-cwd"><span>process.cwd</span></a></h1>
<p><code v-pre>process.cwd()</code> 和 <code v-pre>__dirname</code> 有什么区别?</p>
<ul>
<li><code v-pre>process.cwd()</code> 返回 Node.js 进程的当前工作目录，如果从其他目录运行该进程，该目录可能会发生变化。</li>
<li><code v-pre>__dirname</code> 给出当前模块文件的目录名称，该名称是固定的，不会根据工作目录而变化。</li>
</ul>
</div></template>


