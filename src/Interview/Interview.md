HTML:
1、HTML中如何做SEO优化？
答：主要可以从三个方面入手。
1: title; 
2: meta description;
3: meta keywords 

CSS:
了解flex布局吗？
答: flex布局是一种一维布局模型。给flexbox的子元素之间提供了强大的空间分布和对齐能力。由flex容器与子元素item组成。
用的最多的flex属性：
align-items:center; 
justify-content:center；
flex:1

css中如何解决浮动中高度塌陷？
答: 有两种方法 clear 和 BFC 【块级格式化上下文】
高度塌陷的原因是：
1、子元素浮动脱离文档流，造成父元素高度塌陷；
2、垂直方向上两个块级元素外边距出现合并，会取最大值而不是求和；

clear属性清除浮动与BFC相比 哪个更有优势？
CSS 清除浮动的原理是什么？

了解 CSS 3 动画的硬件加速么？在重绘和重流方面有什么需要注意的点？


JS  
数组是怎么存储的？
答：数组是在内存中引用一段连续的区域来存放一些值，在javascript中数组是通过哈希映射的
同种数据类型的数组会分配连续的存储空间，如果是不同类型的数组则会使用哈希映射

ES5和ES6继承的区别
答：

对javascript的理解
答：

为什么使用typescript?
答： 1.typescript是javascript的超集
    2.使用静态类型检查，提升代码质量  
    3. const防止变量值的更改，readonly防止变量属性的更改

javascript事件循环机制
javascript是单线程语言，同一个时间只能做一件事情。为什么浏览器可以同时执行异步任务？
js是单线程的，但是浏览器是多线程，当js需要执行异步任务时，浏览器会启动另外一个线程去执行该任务。也就是说javascript是单线程指的是执行javascript的线程只有一个，是浏览器提供的javascript主线程。除此之外，浏览器
还有定时器线程、http请求线程。

宏任务：
微任务：