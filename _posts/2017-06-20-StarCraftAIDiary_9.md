---
title: "星际争霸AI日记_9"
layout: post
description: ""
robots: none
---

12:23

如何解决 TilePosition 不能声明到外部的问题？尝试使用Position进行定义呢？

做个实验，定义一个Position，写在头文件里

12:37

并不是所有的class放到头文件里面都会有问题。所以这个应该是TilePosition实现的问题。所以看来应该把这些Manager放到一个class里面好一些。

19:02

我现在要把原有的逻辑放到class里面了。这是个大工程。

22:26

我把代码改成C++的形式了，用类进行封装。

另外，类里面声明的 static 变量，需要在cpp 文件里面定义。关于定义和声明，我应该仔细的研究一下。

另外，改成了C++形式以后，函数的前缀可以拿掉了。

23:14

TilePosition 和 Position不能混用。在比对地图位置的时候要使用 UnitInterface.GetTilePosition()

BUG, 在3点钟方位开始时，第二第三侦查点都没有.

23:55

把近点的寻找和23点的寻找分开就对了。对啊，第一点都没找到，如何确定二三点啊，这个逻辑就有问题。