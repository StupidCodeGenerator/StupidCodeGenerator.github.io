---
title: "星际AI，第二计划"
layout: post
description: ""
robots: none
---

星际AI第一版，可以改动的空间已经非常小。第一是因为对AI框架的不熟悉，第二是因为整体架构并不合理。
再持续的修改下去已经没有意义。所以第一版就是一个尝试，并且目前看来是一个失败的尝试。

我已经把第一版的AI代码上传。其实啥也没有，只能选虫族，否则会报错。可以通过单纯爆狗干死神族官方AI.

地址 -> https://github.com/StupidCodeGenerator/bwapi_myai_1/

星际这类游戏AI和棋牌类有很大不同。

1. 星际AI不是回合制游戏，AI需要实时进行决策，所以不存在一个明确的决策时机。

2. AI的行为有非常高的自由度，而不像棋牌类AI每一次行动都有比较严格的限制。

3. AI需要有嵌套很深的状态机系统。这个和使用一个效用函数就能完成大多数工作的棋牌AI有天壤之别。

所以，新的AI计划：

1. 最最重要的，是首先要设计一套易于扩展，清晰简洁的可嵌套的状态机。

2. 要深入研究BWAPI，尽可能的利用好API提供的信息。

3. 考虑到有很多Unit几乎同时行动，所以一定要有一个面向Unit的计划任务系统。

4. 不要着急写代码，设计优先，保证后期可以很好的扩展。

5. 拒绝流水帐一样的开发日志。没有干货就不要写东西。

6. 深入学习C++，避免由于编程功底问题受到限制。

--- 2017-08-19 ---

这个AI还是有操作时机的，也就是Frame。这个游戏AI应该是Frame驱动的。