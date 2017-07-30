---
title: "星际争霸AI日记_24"
layout: post
description: ""
robots: none
---


![img](https://raw.githubusercontent.com/StupidCodeGenerator/StupidCodeGenerator.github.io/master/images/mineposition.jpg)

12:44

矿点计算已经完成，虽然不是很完美，并且稍有卡顿，但是目前阶段够用了。

下一步要做的，是让AI进行分矿建造。本来现在就已经在不断的建造主基地，只是让他定点建造就可以了。可以使用乱矿流。即根据1个矿点15个农民的比例，分配并建造农民。并且每两个基地就开一个分矿。也就是，单矿两基地，两矿四基地，三矿6基地。

我们需要在BackManager里面记录一下自己占据了几个矿点。通过计算矿点距离内30Tile之内有无己方建筑物来判定。