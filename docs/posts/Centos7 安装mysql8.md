---
title: "Centos7 安装mysql8"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: '2025-06-30'
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---

## 下载MySQL YUM仓库
`wget https://repo.mysql.com/mysql80-community-release-el7-1.noarch.rpm`

`yum localinstall mysql80-community-release-el7-1.noarch.rpm`

## 安装MySQL8
`yum install mysql-community-server -y`

## 启动
`systemctl start mysql`

## 显示root临时密码
`grep "A temporary password" /var/log/mysqld.log`



## ~~<font style="color:rgb(51, 51, 51);">添加MYSQL YUM仓库</font>~~
`~~<font style="color:rgb(51, 51, 51);">sudo rpm -Uvh https://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm</font>~~`



## <font style="color:rgb(51, 51, 51);">导入MYSQL GPG密钥（可选）</font>
`<font style="color:rgb(51, 51, 51);">sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql</font>`

## <font style="color:rgb(51, 51, 51);">安装mysql</font>
**<font style="color:rgb(149, 111, 231);background-color:rgb(238, 240, 244);"> http://repo.mysql.com</font>**

**<font style="color:rgb(149, 111, 231);background-color:rgb(238, 240, 244);">下载安装包再上传到服务器上</font>**

<font style="color:rgb(56, 58, 66);background-color:rgb(250, 250, 250);">rpm -ivh + 文件名</font>

## Question:
### <font style="color:rgb(51, 51, 51);">安装时GPG密钥不过</font>
<font style="color:rgb(51, 51, 51);"></font>`<font style="color:rgb(51, 51, 51);">vim /etc/yum.repos.d/mysql-community.repo</font>`

<font style="color:rgb(51, 51, 51);">修改gpgcheck为0</font>

### <font style="color:rgb(51, 51, 51);">出现拉取失败</font>
#### <font style="color:rgb(51, 51, 51);">更换镜像源</font>
`<font style="color:rgb(51, 51, 51);">sudo cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</font>`

#### <font style="color:rgb(51, 51, 51);">下载阿里云centos镜像源文件</font>
`<font style="color:rgb(51, 51, 51);">sudo wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</font>`

#### <font style="color:rgb(51, 51, 51);">清除YUM缓存并重新生成</font>
`<font style="color:rgb(51, 51, 51);">sudo yum clean all sudo yum makecache</font>`

### <font style="color:rgb(51, 51, 51);">后边修改密码</font>
#### ~~<font style="color:rgb(51, 51, 51);">过不了规则就设置这个密码</font>~~
`~~<font style="color:rgb(51, 51, 51);">alter user root@localhost identified by 'MySQLroot123#';</font>~~`

#### <font style="color:rgb(44, 44, 54);">查看当前的密码策略</font>
`<font style="color:rgb(51, 51, 51);">SHOW VARIABLES LIKE 'validate_password%';</font>`

#### <font style="color:rgb(44, 44, 54);">临时禁用密码策略</font>
`<font style="color:rgb(51, 51, 51);">UNINSTALL PLUGIN validate_password;</font>`

#### <font style="color:rgb(44, 44, 54);">修改密码策略</font>
`<font style="color:rgb(51, 51, 51);">SET GLOBAL validate_password.policy=LOW; SET GLOBAL validate_password.length=6;</font>`

<font style="color:rgb(51, 51, 51);">执行一下alert；</font>

`<font style="color:rgb(51, 51, 51);">ALTER USER 'root'@'localhost' IDENTIFIED BY 'Uu2T%gkewr4^N7ZQ6z@P';</font>`

<font style="color:rgb(51, 51, 51);"></font>

### <font style="color:rgb(34, 34, 38);">解决Failed to start mysql.service: Unit not found</font>
`<font style="color:rgb(51, 51, 51);">systemctl start mysqld.service</font>`

## <font style="color:rgb(51, 51, 51);">开启远程连接</font>
1. <font style="color:rgb(17, 17, 17);">选择</font><font style="color:rgb(17, 17, 17);"> </font>_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">mysql</font>**_<font style="color:rgb(17, 17, 17);"> </font><font style="color:rgb(17, 17, 17);">数据库并查看</font><font style="color:rgb(17, 17, 17);"> </font>_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">user</font>**_<font style="color:rgb(17, 17, 17);"> </font><font style="color:rgb(17, 17, 17);">表：</font><font style="color:rgb(17, 17, 17);"> </font>

_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">USE mysql; SELECT host, user FROM user;</font>**_

2. <font style="color:rgb(17, 17, 17);">更新</font><font style="color:rgb(17, 17, 17);"> </font>_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">user</font>**_<font style="color:rgb(17, 17, 17);"> </font><font style="color:rgb(17, 17, 17);">表，将</font><font style="color:rgb(17, 17, 17);"> </font>_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">host</font>**_<font style="color:rgb(17, 17, 17);"> </font><font style="color:rgb(17, 17, 17);">字段设置为</font><font style="color:rgb(17, 17, 17);"> </font>_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">%</font>**_<font style="color:rgb(17, 17, 17);"> </font><font style="color:rgb(17, 17, 17);">以允许远程访问：</font><font style="color:rgb(17, 17, 17);"> </font>

_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">UPDATE user SET host = '%' WHERE user = 'root';</font>**_

3. <font style="color:rgb(17, 17, 17);">刷新权限以使更改生效： </font>

_**<font style="color:rgb(68, 68, 68);background-color:rgb(249, 249, 249);">FLUSH PRIVILEGES;</font>**_



