---
title: "星际争霸AI日记_1"
layout: post
description: ""
robots: none
---

今天晚上打算搞一版。第一版的计划是单纯的虫族暴兵平推，看看能不能推死星际原版AI以及公司同事。毕竟第一版，简单为主。微操什么的统统的没有，就是暴兵然后推。

目前决定分成三个主要的Manager：

TopManager：最高决策层，用来下达粗略的指令。比如发展经济，侦察，进攻等等。

SupplyManager: 后勤决策层，用来组织农民，发展经济，造人口。

AttackManager：前线决策层，用来进行战术侦察，进攻。

简单的说，TopManager首先对SupplyManager下达发展资源的指令，当资源人口到达一定指标后，下达指令造血池。在此期间，派一个房子探近点，一个农民探两个远点。当狗攒到一定程度以后，下达指令给AttackManager，AttackManager召集所有的小狗，开始平推。

今天的计划：

SupplyManager 造房子（虫族的房子不太一样），造血池。