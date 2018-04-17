---
title: "MySql 学习笔记"
layout: post
description: ""
robots: none
---

哈哈哈哈，是的，我编程8年了，从来没有像模像样的用过数据库。

一直从事游戏开发，恰巧是从来没有写过数据库。虽然书上看过，但是没有经过实战检验的，肯定不扎实。所以重新学习一下就很必要了。 


1. 官方的MySql版本应该下载 Enterprise Edition 还是 Community Edition？

Enterprise Edition 是付费的，那么看来需要下载CommunityEdition。如果什么时候能够体会出不一样来，那么估计学的差不多算入门了，也好。那么首先下载Enterprise Edition.

MySQL Community Server (GPL)
(Current Generally Available Release: 5.7.21)
MySQL Community Server is the world's most popular open source database.

就这个。


2. Installer 下载页面里面没有64bit版本，那么我选择下载64bit的zip包。虽然安装更麻烦些，但是应该不影响。

3. 下载期间，找一篇在线的MySql教程，从头学起。我找到的是http://www.runoob.com/mysql/mysql-tutorial.html

4. 外键：外键用于关联两个表。

复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。

索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。

参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

以上这些概念是我不清楚的，需要重点理解

5. MySql 下载完毕，开始安装，安装教程网上找 https://www.cnblogs.com/Michael1/p/5806384.html

6. Note: MySQL Installer is 32 bit, but will install both 32 bit and 64 bit binaries. 那我就不费劲了，直接用Installer。还是应该仔细阅读文档，程序员的思维不是那么人性化的

7. 安装过程中，需要安装Python3.4，以及在MySqlForExcel选项选定后点击下面的Execute。

8. 网上的教程为PHP，我这里用C++。妈的真不想用C++，但是工作需要

9. 没有实际操作的教程总是乏味的。考虑到以前曾经下载过一些股票的数据，不如把股票写到数据表里面去。在找到更有意思的数据源之前，先拿这个练练。

10. 首先，拿C++先把这些数据读出来。顺便写一套自己的读文件的库，并且学习一下用C++的库如何能够做到基本的文件读写 

11. C++ 给了我太多选择了。我是应该用cout还是printf，应该用string还是 charArray?

In C++ you should in almost all cases use std::string instead of a raw char array.

std::string manages the underlying memory for you, which is by itself a good enough reason to prefer it.

It also provides a much easier to use and more readable interface for common string operations, e.g. equality testing, concatenation, substring operations, searching, and iteration.

以上是StackOverFlow的回答，以及：

Return the string.

I think the better abstraction is worth it. Until you can measure a meaningful performance difference, I'd argue that it's a micro-optimization that only exists in your imagination.

It took many years to get a good string abstraction into C++. I don't believe that Bjarne Stroustroup, so famous for his conservative "only pay for what you use" dictum, would have permitted an obvious performance killer into the language. Higher abstraction is good.

看来StackOverFlow上的大神们都倾向于使用更多的stl而不是C语言特性。