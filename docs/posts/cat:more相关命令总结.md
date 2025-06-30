---
title: "cat:more相关命令总结"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: 2025-06-30T00:00:00.000Z
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
cat 查用参数b e

b   (查看内容时自动显示行数,<font style="background-color:#FADB14;">针对非空行</font>)

n   (同上，<font style="background-color:#FADB14;">针对所有行</font>)

e   (在当前行末尾添加$)

cat 也可以将内容重定向到某个文件如：

#将你键入的内容重定向写到test.txt文件内

cat /dev/stdin > test.txt



#其实cat test.txt > /dev/stdout 就等于cat test.txt

<font style="background-color:#FADB14;">其中 > 是覆写  >>是追加</font>

<font style="background-color:#FFFFFF;">修改内容输入完毕ctrl +D退出</font>



<font style="background-color:#FADB14;">cat查看文件一下子全部显示的，只适合查看简短的内容，如果内容过长将无法显示，这是就需要用more查看内容</font>





more +数字 文件名 直接跳到第X行



