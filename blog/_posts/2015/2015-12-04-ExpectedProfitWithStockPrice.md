---
title: "股票收益的期望值与买入价格和持有时间的关系"
layout: post
description: "股票有风险，赔钱我不管"
robots: none
---

我前面已经研究过，股票每一天的涨落基本上就是随机的。估计股票一天的涨落真的不那么容易，并且也有很大的风险。
对于我这种初学者，对股票的长期收益分析才是比较简单也比较可靠的。我的思路就是既然股票的价格总体上服从对数正态分布，
那么我们就能够使用当前的价格与最大概率的价格的比值，作为一个“相对价格”。

我们假设股票有一种相对价格回到1的趋势，因为这种价格有最大的出现概率。所以说我们可以统计一下在某相对价格买入，
然后在N天以后卖出的期望收益。

根据从雅虎财经爬到的数据进行统计后，得到了这样的结果。

![img](https://raw.githubusercontent.com/StupidCodeGenerator/StupidCodeGenerator.github.io/master/images/ExpectedProfit.png)

横坐标是买入时的相对价格，纵坐标是买入后的持有时间。持有时间以交易日计。持有时间我计算到了180+，已经能看到结论了，所以也没有必要继续往下算。
从图上我们可以非常清楚的看到获利集中在长时间持有，并且在相对价格小于1时买入。

![img](https://raw.githubusercontent.com/StupidCodeGenerator/StupidCodeGenerator.github.io/master/images/ExpectedProfitAfterNDays.png)

这张看的更清楚，这是持有100天的买入价格和获利期望的关系。

接下来的事情就比较简单了，我打算下一步就做。首先对能拿到的所有股票数据进行拟合，拟合结果越好证明这支股票越规律。
然后选出那些非常规律并且相对价格小于1的股票，买入。什么时候涨了就买了就可以了。这种策略周期比较长，但是我认为风险很低。
具体风险有多大，需要等我下一步研究。