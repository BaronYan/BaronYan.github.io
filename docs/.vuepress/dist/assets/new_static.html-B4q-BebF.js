import{_ as e,c as n,o as s,d as a}from"./app-BOcDsV2v.js";const t={},c=a(`<p><code>$instance = new static;</code> 是什么意思？</p><p><code>$instance = new static;</code> 在 PHP 中创建了一个新的当前类的实例。让我解释一下这里的 <code>static</code> 关键字：</p><ul><li><code>static</code> 在这个上下文中是一个后期静态绑定（Late Static Binding）的用法。</li><li>当在一个静态方法中使用时，<code>static</code> 关键字指向的是调用该方法的类。</li><li><code>new static</code> 会创建一个新的对象，这个对象的类型是调用 <code>reorderAll</code> 方法的那个类。</li></ul><p>举个例子来说明：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Warehouse</span> <span class="token package">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">HasCompanySort</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name static-context">Warehouse</span><span class="token operator">::</span><span class="token function">reorderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们调用 <code>Warehouse::reorderAll()</code> 时，<code>new static</code> 实际上等同于 <code>new Warehouse()</code>。</p><p>这种方法的好处是：</p><ul><li>灵活性：它允许 trait 中的方法创建一个正确类型的实例，而不需要知道具体是哪个类在使用这个 trait。</li><li>多态性：如果有多个类使用了这个 trait，每个类调用 reorderAll 时都会创建自己类型的实例。</li><li>避免硬编码：我们不需要在 trait 中硬编码任何特定的类名。</li></ul><p>在 <code>reorderAll</code> 方法中，创建这个实例的目的是为了访问 <code>getSortColumn</code> 和 <code>getCompanyColumn</code> 方法。这些方法可能在使用 trait 的类中被重写，所以我们需要一个实例来正确地调用这些可能被重写的方法。</p><p>总的来说，<code>$instance = new static;</code> 这行代码确保了 trait 中的方法可以正确地适应任何使用它的类，提高了代码的复用性和灵活性。</p>`,10),i=[c];function l(o,p){return s(),n("div",null,i)}const r=e(t,[["render",l],["__file","new_static.html.vue"]]),u=JSON.parse('{"path":"/php/new_static.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/new_static.md","excerpt":"<p><code>$instance = new static;</code> 是什么意思？</p>\\n<p><code>$instance = new static;</code> 在 PHP 中创建了一个新的当前类的实例。让我解释一下这里的 <code>static</code> 关键字：</p>\\n<ul>\\n<li><code>static</code> 在这个上下文中是一个后期静态绑定（Late Static Binding）的用法。</li>\\n<li>当在一个静态方法中使用时，<code>static</code> 关键字指向的是调用该方法的类。</li>\\n<li><code>new static</code> 会创建一个新的对象，这个对象的类型是调用 <code>reorderAll</code> 方法的那个类。</li>\\n</ul>"}');export{r as comp,u as data};
