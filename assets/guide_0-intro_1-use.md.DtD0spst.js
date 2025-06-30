import{_ as e,C as l,c as t,o as p,aj as a,j as d,a as i,G as h}from"./chunks/framework.ByU83GIC.js";const m=JSON.parse('{"title":"博客使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/0-intro/1-use.md","filePath":"guide/0-intro/1-use.md"}'),o={name:"guide/0-intro/1-use.md"};function k(r,s,c,g,b,u){const n=l("Badge");return p(),t("div",null,[s[2]||(s[2]=a(`<h1 id="博客使用" tabindex="-1">博客使用 <a class="header-anchor" href="#博客使用" aria-label="Permalink to &quot;博客使用&quot;">​</a></h1><p>在初始化完环境之后,我们便可以开始我们的博客写作啦!</p><h2 id="创建博客文章" tabindex="-1">📑 创建博客文章 <a class="header-anchor" href="#创建博客文章" aria-label="Permalink to &quot;:bookmark_tabs: 创建博客文章&quot;">​</a></h2><p>在vitepress的<a href="https://vitepress.dev/zh/guide/getting-started#file-structure" target="_blank" rel="noreferrer">站点目录</a>文件夹下建立一个名为<code>posts</code>的文件夹</p><p>在posts文件夹下创建的所有markdown文件将被视为博客文章</p><p>例如你的文件目录结构可能如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ posts</span></span>
<span class="line"><span>│  │    ├─ my-blog-0.md</span></span>
<span class="line"><span>│  │    └─ my-blog-1.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>其中<code>my-blog-0.md</code>和<code>my-blog-1.md</code>便会被主题自动渲染为博客文章</p><h2 id="配置博客文章" tabindex="-1">📖 配置博客文章 <a class="header-anchor" href="#配置博客文章" aria-label="Permalink to &quot;:book: 配置博客文章&quot;">​</a></h2><p>一些和博客文章相关的配置</p><ul><li><code>title</code> 文章的标题,会自动渲染在文章中</li><li><code>date</code> 文章的创建时间,默认为1900-01-01</li><li><code>tags</code> 文章的标签,支持多组标签</li><li><code>pin</code> 布尔值,是否置顶文章,默认为<code>false</code></li><li><code>desc</code> 简介,当摘要为空的时候会显示desc的内容</li><li><code>img</code>: 卡片图片,会展示在博客页面,可选</li></ul><p>摘要即为正文部分第一个<code>---</code>分割线前的所有内容</p><p>下面是一个包含完整博客配置的文章示例:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title: 我的第一篇博客</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">date: 2024-03-23</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tags:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - hello world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - 标签1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pin: true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">desc: xxxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">img: xxx</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我是文章的摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我是一段废话</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 标题A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AAAAAAAAAAAAAAAAAAAAAA</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 标题B</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BBBBBBBBBBBBBBB</span></span></code></pre></div><h2 id="搭建博客主页" tabindex="-1">🏠 搭建博客主页 <a class="header-anchor" href="#搭建博客主页" aria-label="Permalink to &quot;:house: 搭建博客主页&quot;">​</a></h2><p>博客主页会自动的展示所有的博客文章,并且会自动的根据文章的创建时间进行排序</p>`,16)),d("p",null,[s[0]||(s[0]=i("同时还会显示头像昵称签名等其他内容,在")),h(n,{type:"tip",text:"版本1.1.0"}),s[1]||(s[1]=i("及以后还可以自己添加相关的主页小组件"))]),s[3]||(s[3]=a(`<p>例如: <a href="/page/blog.html">博客主页示例</a></p><p>对于任意一个vitepress的markdown页面,使用layout配置便可转为博客主页:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout: blog</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><p>也就是说,你可以自由的选择任意的一个甚至多个页面作为博客主页,不过更推荐将<code>index.md</code>作为博客主页,以符合博客站点的习惯</p><p>如果你还不清楚文件路径和网页路由的对应关系,可以参考vitepress的<a href="https://vitepress.dev/zh/guide/routing#file-based-routing" target="_blank" rel="noreferrer">相关文档</a></p><p>现在你应该能在对应的博客主页中看到创建的文章了</p><h2 id="创建标签页与归档页" tabindex="-1">🔖 创建标签页与归档页 <a class="header-anchor" href="#创建标签页与归档页" aria-label="Permalink to &quot;:bookmark: 创建标签页与归档页&quot;">​</a></h2><p>与博客主页同理</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-n4Km0" id="tab-13agAPx" checked><label data-title="标签页" for="tab-13agAPx">标签页</label><input type="radio" name="group-n4Km0" id="tab-aK7uG2V"><label data-title="归档页" for="tab-aK7uG2V">归档页</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout: tags</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout: archive</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div></div></div>`,9))])}const v=e(o,[["render",k]]);export{m as __pageData,v as default};
