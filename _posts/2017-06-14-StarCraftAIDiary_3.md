---
title: "星际争霸AI日记_3"
layout: post
description: ""
robots: none
---

21:05

如何避免重复的Task输入？如何保证Task唯一性？手动判定？

目前短期的问题，Task 如果做ID处理， 也不能解决问题， 因为每次也是生成新的Task。
只能从TaskType上着手。

目前来说， 对于造房子的任务， 就先用TaskType做判定把。

21:32

整理一下造房子的流程。

是不是应该有Larvar始终Update的函数？在不需要造东西的时候，是不是不需要便利Larvar

农民也是一个个的造

找到一个Larvar造就可以了

Supply应该有一个Train函数。给定UnitTYpe就可以训练某一兵种。