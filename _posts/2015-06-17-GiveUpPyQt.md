---
title: "编程环境的选择"
layout: post
description: "工具集的作用大于编程语言本身"
robots: none
---

![img](http://www.collegeteacher.org/csci101/resource_programming/pics/progLanguages.jpg)

*“这世界上的编程语言分为两类，一类是被人骂的，一类是没人用的” ——Bjarne Stroustrup*

起因是因为Windows在坚持了两年以后终于到了要重装的程度，而我电脑里面还有一套Linux系统就干脆把项目
移植到Linux下。并且Linux的学习可以让我增强很多方面的知识，并且积累很多经验。

首先遇到的问题就是原有的编辑器完全失效。原有的编辑器使用.Net开发，虽然可能有一些Linux下使用.Net
的解决方案，但是寻找一种在Linux下快速构建Desktop应用的方法迫在眉睫。

一开始，由于受到C#语言本身易用性的影响，觉得自己应该使用更加易用的Python语言进行开发。
并且原来写自己的扑克分析软件的时候也大量的使用Python进行数据分析。但是后来发现用PyQt
开发的过程其实并不简单，每一个步骤都依赖于一个完全独立的软件，相互之间独立更新独立发布
完全没有稳定性可言。

所以，在走了大量的弯路以后决定使用C++以及Qt的组合

Qt的优势在于他提供了一个非常标准的跨平台开发环境。使用QtCreator可以非常方便的设计UI并且编写
UI相关的代码。并且使用世界通用的C++作为编程语言。虽然C++的开发难度比脚本语言要高，但是由于
工具的完备性，C++带来的成本支出远远小于工具集带来的收益。

于是乎，我发现**编程语言的选择真的不重要，更为重要的是工具集。**
因为工具集提供了在解决一个复杂问题的解决方案。
比如Ruby on Rails, Python中的SciPy&Matplotlib。还有一些人批评Python过多的依赖于第三方库，
但是如果没有第三方库，Python的使用者也会更少。

同理，**操作系统的选择也并不重要，更为重要的是软件。**
如果我的电脑性能强劲，如果我的目的不是修炼自己而是高效的开发游戏，
我也会毫不犹豫的使用Windows而不是Linux。因为多年的Windows游戏生态系统已经孕育出了非常多优秀的游戏解决方案。
各种各样的编辑器，游戏引擎，以及强大到没朋友的VisualStudio，都是让游戏开发者不能离开Windows的原因。

而很多网络工程师会选择Mac或者Linux，因为Linux从一开始就非常的适合做服务器，无论是经典的Apache还是
我写这篇博客使用的Jekyll，统统都是Linux系统的产物。

用Linus自己的话来说：*“没人用操作系统，人们用的是软件”*。编程语言也是如此。
所以说工具是我们选择一个开发环境时需要考虑的第一要素。
如果Unity用Java当编程语言，我们就用Java。如果Apache只能跑在Windows上，那我们就用Windows。
如果贝尔实验室出的Plan9能够让大粪变成金子，估计我们所有人的电脑上跑的都是Plan9了。