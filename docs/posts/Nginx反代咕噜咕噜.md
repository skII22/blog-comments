---
title: "Nginx反代咕噜咕噜"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: 2025-06-30T00:00:00.000Z
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
### 代码文件
```nginx
# This is a default site configuration which will simply return 404, preventing
# chance access to any other virtualhost.

server {
	listen 80 default_server;
	listen [::]:80 default_server;
	
	location / {
			# 双引号内写入表单的提示语，内容随意
			auth_basic "Authorization";

			# 这里填入认证文件的绝对路径
			auth_basic_user_file /etc/nginx/passwdfile;
            proxy_pass https://www.google.com.hk;

            #把返回的 302 重定向的域名替换成你的。这里关闭
            proxy_redirect off;

            #替换指定字符串
            sub_filter www.google.com.hk gg.nico3389.eu.org;
            #字符串只进行一次替换，即只替换第一个被匹配的字符串。这里关闭。
            sub_filter_once                     off;

            # 指定头部：
            proxy_set_header  Host              "www.google.com.hk";
            proxy_set_header  Referer           $http_referer;
            proxy_set_header  X-Real-IP         $remote_addr;
            proxy_set_header  User-Agent        $http_user_agent;
            proxy_set_header  X-Forwarded-For   $proxy_add_x_forwarded_for;
            proxy_set_header  X-Forwarded-Proto https;
            #防止谷歌返回压缩的内容，因为压缩的内容无法替换字符串
            proxy_set_header  Accept-Encoding   "";
            proxy_set_header  Accept-Language   "zh-CN";

            #把 cookie 的作用域替换成你的域名
            proxy_cookie_domain           www.google.com.hk gg.nico3389.eu.org;
            #传固定的 cookie 给谷歌，是为了禁止即时搜索，因为开启即时搜索无法替换内容
            proxy_set_header  Cookie            "PREF=ID=047808f19f6de346:U=0f62f33dd8549d11:FF=2:LD=en-US:NW=1:TM=1325338577:LM=1332142444:GM=1:SG=2:S=rE0SyJh2W1IQ-Maw";

            # 启用 proxy_cache 缓存
            proxy_cache the_cache_zone;
            proxy_cache_valid           304 2h;
            proxy_cache_valid           403 444 2h;
            proxy_cache_valid           404 2h;
            proxy_cache_valid           500 502 2h;
            proxy_cache_use_stale       invalid_header http_404 http_500 http_502;
            proxy_cache_lock            on;
            proxy_cache_lock_timeout    5s;
        }

	# Everything is a 404
	#location / {
	#	return 404;
	#}

	# You may need this to prevent return 404 recursion.
	location = /404.html {
		internal;
	}
}

```

### 加密文件生成
`<font style="color:#DF2A3F;">openssl passwd</font>`

_**passwd替换为你的密码**_

### 将内容写进文件
`echo"username:password"> passwdfile`

password替换为加密的字符串。

