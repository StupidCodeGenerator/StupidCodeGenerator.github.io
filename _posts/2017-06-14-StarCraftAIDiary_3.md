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

22:07

设计一个 NumOfWorkersTraining 的属性，统计当前同时有多少个农民正在被创建。

在一般情况下，农民都是一个跟着一个的创建。

在农民缺乏的时候，上层可以给Supply层下达指令增加产量。

NumOfWorkersTraining 在开始创建任何一个农民时，+1. 在UnitCreate事件发生，Type为农民的时候，
这个数值减一。可以在屏幕上输出以观察。

另外， OnStart的时候，需要归零。

22:31

SUPPLY_TASK_MORE_WORKERS 指令被细化成 SUPPLY_TASK_ONE_WORKERS_A_TIME. 表示农民一个一个的造。
将来还会有多个一起造的指令

22:34

TASK 模型只是用来上层和下层进行通信。Supply里面还是需要一组状态来约束很多行为。比如不但要知道 NumOfWorkersTraining,
还需要知道 MaxOfWorkersTraining. 前一种是状态，后一种是约束。

回头看看吧，要是写着写着Task的作用不明显了也许就砍掉了，留着一个没用的系统绝壁是后患。