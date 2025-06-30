---
title: "Why is Redis so Fast?"
desc: "Explore the key factors behind Redis's exceptional speed."
img: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
pin: false
createdAt: 2024-03-07
date: 2024-03-07T00:00:00.000Z
draft: false
categories:
  - caching-performance
tags:
  - "Redis"
  - "Performance"
---

![](https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png)

There are 3 main reasons as shown in the diagram above.

*   Redis is a RAM-based database. RAM access is at least 1000 times faster than random disk access.

*   Redis leverages IO multiplexing and single-threaded execution loop for execution efficiency.

*   Redis leverages several efficient lower-level data structures.

