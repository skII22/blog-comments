---
title: "Linux安装nginx"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: 2025-06-30T00:00:00.000Z
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
## 拉取
`cd /home`

`wget https://nginx.org/download/nginx-1.20.1.tar.gz`

`tar -zxvf nginx-1.20.1.tar.gz -C /opt`

`cd /opt/nginx-1.20.1/`

## 编译
`./configure --with-http_ssl_module`

`make && make install`

### 自定义编译路径(自定义选项)
`./configure --prefix=/home/nginx`



## 启动
`/usr/local/nginx/sbin/nginx -c /opt/nginx-1.20.1/conf/nginx.conf `

<font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);"></font>

## Question:
1. `./configure: error: the HTTP rewrite module requires the PCRE library.`

解决：

Centos=>

`yum -y install pcre-devel`

Ubuntu=>

`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);">apt instal libpcre3 libpcre3-dev</font>`

2. `./configure: error: the HTTP gzip module requires the zlib library.`

解决：

Centos=>

`yum install -y zlib-devel`

Ubuntu=>

`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);">apt install zlib1g zlib1g</font><font style="color:rgb(166, 127, 89);">-</font><font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);">dev</font>`

