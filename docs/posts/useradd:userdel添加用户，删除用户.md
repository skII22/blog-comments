---
title: "useradd:userdel添加用户，删除用户"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: '2025-06-30'
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
<font style="background-color:#FFFFFF;">useradd xxx(用户名)</font>

<font style="background-color:#FFFFFF;">#Linu添加用户</font>

<font style="background-color:#FFFFFF;">passwd</font>

<font style="background-color:#FFFFFF;">#设置密码</font>

<font style="background-color:#FFFFFF;">useradd 参数</font>

<font style="background-color:#FFFFFF;">-c<备注>：加上备注文字。备注文字会保存在passwd的备注栏位中；</font>

<font style="background-color:#FFFFFF;">-d<登入目录>：指定用户登入时的启始目录(指定的home路径 )；</font>

<font style="background-color:#FFFFFF;">-e<有效期限>：指定帐号的有效期限；</font>

<font style="background-color:#FFFFFF;">-f<缓冲天数>：指定在密码过期后多少天即关闭该帐号；</font>

<font style="background-color:#FFFFFF;">-g<群组>：指定用户所属的群组；</font>

<font style="background-color:#FFFFFF;">-m：自动建立用户的登入目录；</font>

<font style="background-color:#FFFFFF;">-M：不要自动建立用户的登入目录；</font>

<font style="background-color:#FFFFFF;">-n：取消建立以用户名称为名的群组；</font>

<font style="background-color:#FFFFFF;">-s<shell>：指定用户登入后所使用的shell，一般用的是/bin/bash；</font>

<font style="background-color:#FFFFFF;">-u<uid>：指定用户id。</font>

<font style="background-color:#FFFFFF;"></font>

<font style="background-color:#FFFFFF;"></font>

<font style="background-color:#FFFFFF;">userdel <用户></font>

<font style="background-color:#FFFFFF;">-f：强制删除用户，即使用户当前已登录；</font>

<font style="background-color:#FFFFFF;">-r：删除用户的同时，删除与用户相关的所有文件。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(247, 247, 249);"></font>

