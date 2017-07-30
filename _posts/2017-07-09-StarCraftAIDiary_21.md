---
title: "星际争霸AI日记_21"
layout: post
description: ""
robots: none
---

09:57

现在已经能够获得当前正在建造的建筑和单位。这样就可以构建process系统。

10:50

对于建造失败的处理：对于虫族的单位，如果一个农民被派去建造，这个农民肯定是有去无回的。那么我们可以建立一个表，叫做builders。
当UpdatePlan走了一步，需要建造一个建筑时，派一个农民建造，并且把它放到builders表中。当这个worker被销毁，我们再从表中把这个节点销毁。
可以用HashTable实现

11:04 

其实builders不是实时查找，只需要遍历，所以可以用list算了

12:04

UnitType 是一个Class， 所以存在被释放的问题。所以在传递的时候，最好使用构造方法重新造一个。

12:24

Broodwar->self()->incompleteUnitCount 貌似对虫族的蛋没啥用？

16:35

Plan系统改为：执行后不销毁，而是转移到Progress序列。等待事件返回后才销毁。

16:49

这样，Builder可以不要了，只要Progress和Plan两大列表就可以，保证他们稳定运行。目前看来，UnifinishedUnitCount并不靠谱。
Progress 的 Building的位置可能是个坑，这个可以先不管。

17:35

现在看来， 疯狂造人口的问题是解决了，用自己写的Process列表和Plan列表结合，然后自己实时计算当前的人口上限。
星际API的延迟是个坑，可能是因为是第三方Hook进去的API，所以存在不可避免的延迟。API需要等到游戏把结果输出到屏幕上才能够辨识,
我没看源代码，只是瞎猜

19:21

我在 UnitMorph 中结束的 Process， 而在UnitCreate 中增加的人口上限。但是我记得UnitCreate不能完成所有功能来着.

星际的AI真的不好写，需要记住好多细节。

UnitCreate现在看来好了啊？为啥一开始的时候记得它不好使呢？那可以把Process和Supply都写到UnitCreate里面了。

19:48

目前看来新架构工作良好，可以进行分矿计划了。

首先要根据水晶的位置，生成可以开矿的矿点. 这个工作交给BackManager去完成。BackManager的目录下做一个新的类，叫做ResourcePointFinder.

它是一个简单的C文件，包含一个函数，可以根据当前矿脉分布，以及矿脉两侧的地形，生成一个List，包含地图上可以开分矿的TilePosition

矿点条件（首先是简单的算法，快速实现）：

快速实现的方法是，遍历所有的矿。如果此矿与startLocation的距离 > 30 tile. 并且其 30 范围内没有敌人单位存在，则为一个理想的矿。

然后在这个矿上，getBuildPosition，随机出一个可以造建筑的位置。

还是搞个类吧，以后扩展方便。