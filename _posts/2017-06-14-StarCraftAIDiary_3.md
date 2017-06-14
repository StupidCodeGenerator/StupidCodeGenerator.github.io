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

我决定复制一个版本，然后去掉Task这个看起来很坑的功能。

如果他让代码变得复杂，而不是简单，就没有这个必要。因为和人不一样，程序完成所有任务都是瞬间完成的。

至少在SupplyManager里面，这个东西没啥用。

人的操作也是，只有非常少数的工作，需要被记录下来并且延迟完成。

但是 SupplyManager 还是绝壁有用的。如果所有的东西都写在一个模块里，肯定炸了。

到时候连上帝都拿这代码没招。

23:06 

我再整理一下。MaxOfWorkersTraining 表示最大可以接受的同时制造农民的数量。 NumOfWorkersTraining 表示当前同时制造的农民数量。
MaxOfWorkersTraining 需要手动设置，而NumOfWorkersTraining 在开始制造一个农民时增加，在一个农民产生时减少。这个需要输出看一下。

去掉Task以后，功能陷入瘫痪，先解决造农民的问题再说

23:16

由于Supply在星际里面有特指，表示人口上限。所以原来的SupplyManager被改成ResourceManager，并且所有的前缀都改了

23:42

刚才在编译的时候，遇到了 Internal Error. 我后来把Release目录下的已有文件全部删除再编译就过了。可能是因为有进程占用了这个文件？

23:55

虫族比较奇怪，OnUnitCreate和OnUnitMorph是两个事件。Morph表示一个单位被创建了。也许虫族只有小虫子是被创建的？

注释里面说，是因为暴雪这么干，我才这么干。

另外，需要创建TopManager了。里面应该有一个叫做Flow的东西。一大坨逻辑，写明了一场比赛在什么时候做什么事。