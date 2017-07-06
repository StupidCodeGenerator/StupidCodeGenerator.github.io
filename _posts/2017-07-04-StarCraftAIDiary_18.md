---
title: "星际争霸AI日记_18"
layout: post
description: ""
robots: none
---

12:57

当前的AI需要一套可靠，稳定的当前状态识别系统。当前在造什么东西，都有什么东西，等等。

14:39

绝对不能直接调用建造或者Train，因为时间差的问题只能通过延时解决。所以用计划系统可以一劳永逸解决问题。
但是计划系统不能用queue了， 应该用普通的list，这样可以 push_front ，提高优先级。
如果需要当前立即建造什么东西，可以 push_front 这样就会立即执行，并且可以保证执行一次。

但是Process依然需要，有空写一个Process系统，和计划系统链接。这样通过完全避免直接建造，达到可靠建造的目的。

PS：

今天第一次灭掉了星际官方AI，截图留念。但是我发现现在的打法很难打掉人族。

![img](https://raw.githubusercontent.com/StupidCodeGenerator/StupidCodeGenerator.github.io/master/images/FirstBeat.png)