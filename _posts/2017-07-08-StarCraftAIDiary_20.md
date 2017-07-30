---
title: "星际争霸AI日记_20"
layout: post
description: ""
robots: none
---

12:29

目前首先要实现的短期修改任务是将plan从queue改成list并且允许从前插入任务。并且完善BackManager使之可以确切的知道当前拥有的资源和单位情况，包括正在建造的。如果必要，可以拉低BackManager刷新的频率.