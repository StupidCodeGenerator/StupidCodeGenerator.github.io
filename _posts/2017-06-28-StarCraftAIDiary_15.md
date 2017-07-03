---
title: "星际争霸AI日记_15"
layout: post
description: ""
robots: none
---

12:22

用一中午的时间，实现UnitWrapper以及Plan

UnitWrapper 在每一帧的Update中会验证 unit 是否还存在，如果不存在，则析构。

Unit 里面的plan，叫做ActionPlan