---
title: "useradd:userdel添加用户，删除用户"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: 2025-06-30T00:00:00.000Z
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
```markdown
useradd xxx(用户名)
```
```markdown
# Linu添加用户

passwd

#设置密码

useradd 参数

-c<备注>：加上备注文字。备注文字会保存在passwd的备注栏位中；

-d<登入目录>：指定用户登入时的启始目录(指定的home路径 )；

-e<有效期限>：指定帐号的有效期限；

-f<缓冲天数>：指定在密码过期后多少天即关闭该帐号；

-g<群组>：指定用户所属的群组；

-m：自动建立用户的登入目录；

-M：不要自动建立用户的登入目录；

-n：取消建立以用户名称为名的群组；

-s<shell>：指定用户登入后所使用的shell，一般用的是/bin/bash；

-u<uid>：指定用户id。





userdel <用户>

-f：强制删除用户，即使用户当前已登录；

-r：删除用户的同时，删除与用户相关的所有文件。

```

