---
title: "由代码的复杂程度想到大型系统设计的核心原则"
layout: post
description: "20个模块是人类能够良好控制的上限"
robots: none
---

![img](http://i1.tietuku.com/ec0ec0baeba87186.png)

大前提：程序设计是一项大工程，非常的浩大。其复杂度之高也是超过我们想象的。想要同时降低横向复杂度和纵向复杂度那就是痴心妄想。

既然我们没有办法让写出的程序变得简单，那么我们要追求的就是代码的清晰和明确。一段优秀的代码必须不能出现模棱两可，含糊不清的描述，更不能出现任何与整个程序毫无关系的废物代码。就像一个复杂的机器，复杂本身不可避免也并不可怕，可怕的是整个机器乱作一团，并且还配合了一大堆闪烁其词的文档。

优秀的设计虽然不能降低复杂度，但是优秀的设计往往做到尽可能的模块化。每一个模块有一个明确的接口和清晰的边界。这样既能够提高整个程序的正交性，并且还能够在需要的时候将程序中的任务分发给别人。

良好设计的代表：国际空间站。国际空间站是人类造出的最了不起的东西之一，它的复杂度也是惊人的。但是由于现代航天器都秉承着模块化的设计理念，让多个国家合作建造这样一件东西成为可能。

国际空间站是由分布于世界各地不同的团队合作建造的，虽然每一个零部件完全不同，但是他们都采用了有限的几种规范化的接口和标准。

但是模块化有一个很难把握的度，太多的模块本身就变成了一种复杂度。一个大系统由模块嵌套模块构成，每一个层级的模块数量应该维持在一个可控的范围之内。国际空间站由20个左右的模块构成，成功的大型系统，我个人认为，模块数量应该维持在这个范围内。如果超过了这个限度，就上升一层将其分割为若干个系统。那么这个大型系统就由若干个可控的子系统构成。

