---
title: "关于tar:gzip的相关命令总结"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: 2025-06-30T00:00:00.000Z
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
<font style="color:rgb(0, 0, 0);">tar -cvf xxx.tar xxx（绝对路径/被打包文件）</font>

<font style="color:rgb(0, 0, 0);">#将xxx文件打包为tar包</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">#tar -zcvf xxx.tar.gz xxx（绝对路径/被打包文件）</font>

<font style="color:rgb(0, 0, 0);">将xxx文件打包为tar包后再进行压缩</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">tar -xvf xxx.tar</font>

<font style="color:rgb(0, 0, 0);">#将xxx.tar文件的内容还原出来</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">tar -zxvf xxx.tar</font>

<font style="color:rgb(0, 0, 0);">#将xxx.tar.gz文件的内容还原出来</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">tar -tf tar文件</font>

<font style="color:rgb(0, 0, 0);">#查看tar包的内容</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">tar -r xxx.tar file   
</font><font style="color:rgb(0, 0, 0);">#把file 加入 xxx.tar</font>

<font style="color:rgb(0, 0, 0);">  
</font><font style="color:rgb(0, 0, 0);">tar --delete xxx.tar file  
</font><font style="color:rgb(0, 0, 0);">#把file 从 xxx.tar 里删除掉</font>

 

#gzip 压缩	gunzip等价于gzip -d解压

#gzip 常用的参数

c v r f u

f(强制操作)<font style="background-color:#FADB14;"></font>

v（显示执行过程）

r(递归进行压缩，也就是一级一级向下执行)

c（执行压缩不对源文件进行操作，不加c参数一般会删除源文件）

<font style="background-color:#FADB14;">Gzip只能进行单文件压缩，不能对文件夹进行压缩</font>  
u 在解压前删除需要重写的文件

