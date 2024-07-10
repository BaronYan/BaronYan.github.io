import{_ as n,c as s,o as a,e as p}from"./app-BRq-13Yl.js";const e={},t=p(`<h2 id="选择静态类or动态类" tabindex="-1"><a class="header-anchor" href="#选择静态类or动态类"><span>选择静态类or动态类</span></a></h2><p>在 PHP 中，静态类和动态类的选择主要取决于具体的应用场景，而不仅仅是效率问题。以下是两者的对比及其适用场景：</p><h3 id="静态类-static-class" tabindex="-1"><a class="header-anchor" href="#静态类-static-class"><span>静态类（Static Class）</span></a></h3><p><strong>特点：</strong></p><ul><li>不能实例化，直接通过类名调用其方法和属性。</li><li>通常用于工具类和辅助类，提供一组通用的功能或常量。</li><li>所有方法和属性都是静态的，用 self 或 static 关键字引用。</li></ul><p><strong>适用场景：</strong></p><ul><li>需要全局访问的工具类（例如：日志记录、配置管理）。</li><li>不需要保存状态的功能模块。</li><li>一些常量定义和静态方法。</li></ul><p><strong>效率：</strong></p><ul><li>静态方法的调用开销通常比实例方法低，因为不需要实例化对象。</li><li>由于静态属性和方法是直接存储在类中的，它们的访问速度通常更快。</li></ul><h3 id="动态类-dynamic-class" tabindex="-1"><a class="header-anchor" href="#动态类-dynamic-class"><span>动态类（Dynamic Class）</span></a></h3><p><strong>特点：</strong></p><ul><li>可以实例化，创建多个对象，每个对象有独立的属性和方法。</li><li>适合需要维护状态的应用，如用户会话、数据模型等。</li><li>通过 $this 引用实例对象。</li></ul><p><strong>适用场景：</strong></p><ul><li>需要管理和维护状态的数据结构或实体类。</li><li>每个实例对象需要独立的属性和方法。</li><li>复杂业务逻辑需要封装到对象中。</li></ul><p><strong>效率：</strong></p><ul><li>由于需要实例化对象，动态类的创建和销毁开销比静态类大。</li><li>每次调用实例方法时，都需要通过对象实例进行，访问速度略慢。</li></ul><h3 id="如何选择" tabindex="-1"><a class="header-anchor" href="#如何选择"><span>如何选择</span></a></h3><ul><li>无状态功能：如果你的类不需要维护任何状态，只是提供一些独立的功能，那么使用静态类更合适。例如，数学计算、字符串处理、配置读取等。</li><li>需要维护状态：如果你的类需要保存一些状态信息，每次操作都可能改变这些状态，那么使用动态类。例如，用户对象、订单对象、数据库模型等。</li><li>重用性和测试：动态类通常更适合面向对象编程的原则，易于扩展和测试。静态类虽然方便，但在单元测试和依赖注入方面不如动态类灵活。</li><li>性能考虑：除非在高并发场景下性能差异非常明显，一般情况下，不必过于关注静态类和动态类的性能差异，而是根据设计和可维护性进行选择。</li></ul><p><strong>结论</strong></p><p>选择静态类还是动态类，主要取决于应用场景和设计需求。对于无状态的工具类，可以使用静态类；对于需要维护状态的业务逻辑，使用动态类会更合适。尽量遵循面向对象的设计原则，以确保代码的可维护性和可扩展性。</p><p><strong>在 laravel 中，对于 CRUD 操作的服务类，应该选择动态类还是静态类？</strong></p><p>在 Laravel 中，通常建议使用动态类来实现 CRUD 操作的服务类。这主要是因为动态类更符合面向对象编程的原则，并且在实际应用中更具灵活性和可测试性。</p><p><strong>理由和优势</strong></p><ol><li>面向对象设计原则： <ul><li>动态类可以充分利用面向对象的特性，如继承、多态和封装，便于代码复用和扩展。</li></ul></li><li>依赖注入： <ul><li>Laravel 的服务容器和依赖注入机制非常强大，使用动态类可以方便地进行依赖注入，提升代码的可维护性和测试性。</li></ul></li><li>可测试性： <ul><li>动态类更容易进行单元测试，可以通过模拟（mock）对象来测试不同的场景和行为。</li><li>静态类在测试时比较困难，因为无法轻易地模拟静态方法的行为。</li></ul></li><li>状态管理： <ul><li>虽然 CRUD 操作本身通常是无状态的，但动态类仍然允许在需要时保存状态信息，或在不同的方法之间传递数据。</li></ul></li><li>遵循 Laravel 的最佳实践： <ul><li>Laravel 社区和官方文档通常推荐使用动态类，特别是在服务和依赖管理方面。</li><li>动态类可以更好地与 Laravel 的其他功能（如中间件、事件、任务队列等）集成。</li></ul></li></ol><p><strong>实践示例</strong></p><p>假设我们有一个用户服务类 UserService，用于处理用户的 CRUD 操作：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Services</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">UserService</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$user</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span> <span class="token operator">=</span> <span class="token variable">$user</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">createUser</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getUserById</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updateUser</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token variable">$user</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleteUser</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制器中可以这样使用：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>UserService</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$userService</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">UserService</span> <span class="token variable">$userService</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">userService</span> <span class="token operator">=</span> <span class="token variable">$userService</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">create</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">userService</span><span class="token operator">-&gt;</span><span class="token function">createUser</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">show</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">userService</span><span class="token operator">-&gt;</span><span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;User not found&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">userService</span><span class="token operator">-&gt;</span><span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;User not found&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$deleted</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">userService</span><span class="token operator">-&gt;</span><span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$deleted</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;User deleted&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;User not found&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论</strong></p><p>在 Laravel 中，对于 CRUD 操作的服务类，使用动态类是最佳实践。它不仅符合面向对象的设计原则，还能更好地利用 Laravel 的依赖注入和服务容器功能，从而提升代码的可维护性和测试性。</p>`,31),l=[t];function c(i,o){return a(),s("div",null,l)}const r=n(e,[["render",c],["__file","静态类和动态类.html.vue"]]),k=JSON.parse('{"path":"/php/%E9%9D%99%E6%80%81%E7%B1%BB%E5%92%8C%E5%8A%A8%E6%80%81%E7%B1%BB.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"选择静态类or动态类","slug":"选择静态类or动态类","link":"#选择静态类or动态类","children":[{"level":3,"title":"静态类（Static Class）","slug":"静态类-static-class","link":"#静态类-static-class","children":[]},{"level":3,"title":"动态类（Dynamic Class）","slug":"动态类-dynamic-class","link":"#动态类-dynamic-class","children":[]},{"level":3,"title":"如何选择","slug":"如何选择","link":"#如何选择","children":[]}]}],"git":{"updatedTime":1720626799000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"php/静态类和动态类.md","excerpt":"<h2>选择静态类or动态类</h2>\\n<p>在 PHP 中，静态类和动态类的选择主要取决于具体的应用场景，而不仅仅是效率问题。以下是两者的对比及其适用场景：</p>\\n<h3>静态类（Static Class）</h3>\\n<p><strong>特点：</strong></p>\\n<ul>\\n<li>不能实例化，直接通过类名调用其方法和属性。</li>\\n<li>通常用于工具类和辅助类，提供一组通用的功能或常量。</li>\\n<li>所有方法和属性都是静态的，用 self 或 static 关键字引用。</li>\\n</ul>\\n<p><strong>适用场景：</strong></p>\\n<ul>\\n<li>需要全局访问的工具类（例如：日志记录、配置管理）。</li>\\n<li>不需要保存状态的功能模块。</li>\\n<li>一些常量定义和静态方法。</li>\\n</ul>"}');export{r as comp,k as data};
