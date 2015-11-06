---
title: "使用Scipy对股票价格进行拟合"
layout: post
description: "股票有风险，赔钱我不管"
robots: none
---

股票价格服从对数正态分布这事儿我是从一本金融书上看的。

所谓对数正态分布(Lognormal distribution)是指与随机事件成对数关系的事件服从正态分布，则当前随机事件服从对数正态分布。

F(x;\mu \sigma )=\frac{1}{x\sigma\sqrt{2\pi }}{e}^{-\frac{(ln(x)-\mu)^2}{2\sigma^2}}

一个比较明显的例子是股票市场的对数增长率和股价的关系。对数增长率表示为log(P[n]/P[n-1])，也就是当前样本和上一样本相除取对数。

![img](http://i13.tietuku.com/2008df39273d1b42.png)

所以我们可以判定股票价格服从对数正态分布(左侧那个小小的突起，是跌停……)。这样通过使用对数正态分布曲线对股票价格分布进行拟合，就可以给出一段历史时期内最有可能出现的价格。

如果将当前股票价格和拟合结果做差值或者比值然后作为特征值使用，兴许还能给出股票涨落的概率。这一点我还在做，还有许多的代码需要写。

Scipy给出了lognorm.fit()函数来实现自动拟合，但是lognorm.fit()给出的结果包含三个参数，而不是一般情况下的两个参数。

lognorm.fit()返回结果中的三个参数是：shape，loc，scale

而标准的lognrom的两个参数是sigma，mu。

他们之间的关系是这样的：shape = sigma, mn = log(scale), 而loc的意思是‘location’，表示的只是在x方向的偏移。也就是说，正常的
lognrom是F(x;sigma,mu)，而Scipy中的lognorm是F(x-loc;shape,log(scale))。

Scipy这么做有浓浓的工程意味。三个参数表示的就是形状，缩放，位置。仅此而已。尤其是这个log(scale)，你会发现带入原公式后，
原有的log(x)-mu变成了log(x)-log(scale)，然后就变成了log(x/scale)。这不就是X方向的缩放么。

最后还有一个实际的问题。貌似lognorm给的loc初值是1，然后这个fit函数会跌入一个局部最优解，并不能好好的拟合。

我们需要将loc的初值赋值为0，也就是调用lognorm.fit(data,loc=0)，这样，才能拟合出一个靠谱的解