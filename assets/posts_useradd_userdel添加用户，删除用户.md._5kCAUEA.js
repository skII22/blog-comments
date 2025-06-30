import{_ as a,c as n,o as i,aj as e}from"./chunks/framework.ByU83GIC.js";const k=JSON.parse(`{"title":"useradd:userdel添加用户，删除用户","description":"Explore the key factors behind Redis's exceptional speed.","frontmatter":{"title":"useradd:userdel添加用户，删除用户","description":"Explore the key factors behind Redis's exceptional speed.","image":"https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png","date":"2025-06-30T00:00:00.000Z","draft":false,"categories":["caching-performance"],"tags":["Linux"]},"headers":[],"relativePath":"posts/useradd:userdel添加用户，删除用户.md","filePath":"posts/useradd:userdel添加用户，删除用户.md"}`),l={name:"posts/useradd:userdel添加用户，删除用户.md"};function p(t,s,d,h,c,r){return i(),n("div",null,s[0]||(s[0]=[e(`<div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">useradd xxx(用户名)</span></span></code></pre></div><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Linu添加用户</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">passwd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#设置密码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">useradd 参数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-c&lt;备注&gt;：加上备注文字。备注文字会保存在passwd的备注栏位中；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d&lt;登入目录&gt;：指定用户登入时的启始目录(指定的home路径 )；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-e&lt;有效期限&gt;：指定帐号的有效期限；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-f&lt;缓冲天数&gt;：指定在密码过期后多少天即关闭该帐号；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-g&lt;群组&gt;：指定用户所属的群组；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-m：自动建立用户的登入目录；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-M：不要自动建立用户的登入目录；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-n：取消建立以用户名称为名的群组；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-s&lt;shell&gt;：指定用户登入后所使用的shell，一般用的是/bin/bash；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-u&lt;uid&gt;：指定用户id。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userdel &lt;用户&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-f：强制删除用户，即使用户当前已登录；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-r：删除用户的同时，删除与用户相关的所有文件。</span></span></code></pre></div>`,2)]))}const o=a(l,[["render",p]]);export{k as __pageData,o as default};
