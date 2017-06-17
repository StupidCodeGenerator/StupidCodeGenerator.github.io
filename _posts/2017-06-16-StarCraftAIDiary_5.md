---
title: "星际争霸AI日记_5"
layout: post
description: ""
robots: none
---

12:19

调试一下，开始造血池。

在造血池之前，先构建TopManager，里面有FlowUpdate，作为流程控制。然后FlowUpdate中，满足条件造血池。

另外，造农民，停农民，也是TopManager。

12:37

房子造完的一瞬间，人口上限还没有涨上去，但是当时房子已经造出来了。所以它会紧接着造第二个房子。

目前我想到的解决方案是，不去看当前的TotalSupply，而是对房子进行计数。

目前看来，星际里面所有的Supply来源都是房子。

13:09

重新写了停农民的代码。另外，“持续造农民”,"全力造农民"之类的逻辑，应该在ResourceManager里面抽取成函数。