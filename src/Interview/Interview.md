# 研发的本质：你去追求一个概念上看起来很有希望的想法，但你只有在花了足够多的时间之后才真正理解它的意义

##工程师素质：这个项目有没有自己个人的思考在里面，达到了什么样的技术深度，技术广度。这个项目有没有多人协作，协作中遇到了什么工程化难题，如何解决，用户的反馈如何，做没做过后期调研。

小程序现在的用户量怎么样呢？日活又如何？

# HTML:
## 1、HTML中如何做SEO优化？
答：主要可以从三个方面入手。
1: title; 
2: meta description;
3: meta keywords 

# CSS:
## 了解flex布局吗？
答: flex布局是一种一维布局模型。给flexbox的子元素之间提供了强大的空间分布和对齐能力。由flex容器与子元素item组成。
用的最多的flex属性：
align-items:center; 
justify-content:center；
flex:1

## css中如何解决浮动中高度塌陷？
答: 有两种方法 clear 和 BFC 【块级格式化上下文】
高度塌陷的原因是：
1、子元素浮动脱离文档流，造成父元素高度塌陷；
2、垂直方向上两个块级元素外边距出现合并，会取最大值而不是求和；

## clear属性清除浮动与BFC相比 哪个更有优势？
## CSS 清除浮动的原理是什么？

## 了解 CSS 3 动画的硬件加速么？在重绘和重流方面有什么需要注意的点？


# JS  
## 数组是怎么存储的？
答：数组是在内存中引用一段连续的区域来存放一些值，在javascript中数组是通过哈希映射的
同种数据类型的数组会分配连续的存储空间，如果是不同类型的数组则会使用哈希映射

## ES5和ES6继承的区别
答：
 
## 对javascript的理解
答：

## let var const 的区别？
答：

## es6解构赋值
答：通过模式提取和分配值，即将右侧的值按照指定模式进行匹配和提取，然后将提取的值分配给左侧对应的变量。
右侧的值是任何具有可迭代性质的对象。
实现原理是通过使用对象或数组的迭代器，将右侧的值转化为可迭代对象，并逐一匹配模式，将匹配到的值赋给左侧的变量

### 数组解构与对象解构的区别
答：数组结构是以元素的位置为匹配条件来提取想要的数据，对象解构是以元素的属性名来提取想要的数据

## 闭包
答：闭包是指有权访问另一个函数作用域中变量的函数。创建闭包的最常见的方法就是在一个函数内创建另一个函数，创建的函数可以访问到  
当前函数的局部变量

## 为什么使用typescript?
答： 1.typescript是javascript的超集
    2.使用静态类型检查，提升代码质量  
    3. const防止变量值的更改，readonly防止变量属性的更改

## javascript事件循环机制
javascript是单线程语言，同一个时间只能做一件事情。为什么浏览器可以同时执行异步任务？
js是单线程的，但是浏览器是多线程，当js需要执行异步任务时，浏览器会启动另外一个线程去执行该任务。也就是说javascript是单线程指的是执行javascript的线程只有一个，是浏览器提供的javascript主线程。除此之外，浏览器
还有定时器线程、http请求线程。

事件循环由宏任务和执行宏任务期间产生的所有微任务组成。完成当下宏任务之后，立即执行所有在此期间入队的微任务。

宏任务：script  settimeout setinterval requestAnimation
微任务：promise.then

settimeout的误区，如果settimeout所处的宏任务执行完了，大于4ms, name就会执行settimeout.如果小于4msname就需要等下一个宏任务执行完才会执行settimeout

## for forEach map的区别
1. for 处理大型数据性能较好，不需要创建新的函数作用域
2. forEach对数组进行遍历，不会更改原数组，性能比map较好
3. map不仅可以遍历数组，还会返回新的数组，性能较差


# React
为什么react的setState是异步的？

## React事件机制
答：React的合成事件，是在document处监听了所有的时间，当事件发生并冒泡到document上的时候，React将事件内容交由真正的处理函数运行  。这样减少了内存的消耗和可以在组件挂载和消耗时统一订阅和移除事件。

## HOC renderprops hooks
答：HOC是一种组件设计模式，接受一个组件和额外的参数，返回一个新的组件。  
hooks可以在不使用class的情况下使用state以及其它的React特性，实现复用代码逻辑。


## React 中受控组件和非受控组件的区别？

## React Context
答：react主要通过props传递数据，维持单向数据流，这样使得组件之间的数据易于管理

# 工程化篇
webpack构建速度优化有哪些方案？
1. 首先通过speed-measure-webpack-plugin来检测各个阶段花费的时间


前后端分离的历史？分离模式带来的好处和坏处有哪些？
答:  

## ES module和 CommonJS的区别
答: 语法层面：CommonJS通过module.export导出，通过require导入。ESmodule通过export导出， 通过import导入。  
CommonJS是运行时加载模块，ESmodule是编译期间就确定模块的依赖。  
CommonJS加载的时整个模块，ESmodule可以单独加载其中某个接口。
## webpack如何优化打包速度？
1. 优化Loader的文件搜索范围，babel缓存 
2. happyPack,将loader的同步执行转换为并行，提升打包效率
## 如何减少webpack打包体积
1. 按需加载
2. Tree Shaking

## webpack构建流程
1. 初始化参数：
2. 开始编译
3. 确定入口：根据配置中的entry找出所有的入口文件
4. 编译模块: 从入口文件出发，调用所有配置的loader对模块进行翻译，再找出模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模板编译：在经过第四步使用loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系;
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk,再把每个chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件写入到系统；

## babel的原理是什么？
1. 解析Parse: 将代码解析生成抽象语法树（AST）,即词法分析与语法分析的过程；
2. 转换Transform: 对于AST进行变换一系列的操作，babel接受得到AST并通过babel-traverse对其进行遍历，在此过程中进行添加、更新及移除等操作；
3. 生成Generate: 江边换后的AST在转换为JS代码，使用到的模块是babel-generator

## 代码分割
1. 将代码分离到不同的bundle中，然后可以按需加载并运营这些文件。代码分离可以用于获取更小的bundle，以及控制资源加载优先级
2. 常见的代码分离方法：1.入口起点，使用entry配置手动地分离代码。2.防止重复，使用 Entry dependencies或者  splitChunksPlugin de。3.动态导入，通过模块的内联函数调用来分离代码

## webpack与vite区别
1. 打包bundle
   1. webpack使用nodeJS从入口处构建依赖图，将项目中所需模块组合成一个或者多个bundle文件，构建依赖图谱
   2. vite无需bundle操作，文件之间的依赖关系通过esmodule进行解析
2. 首屏、懒加载性能
   1. webpack本身bundle之后得到一个完整的模块依赖关系包，不存在问题
   2. vite没有进行bundle所以需要额外处理
3. 

# http篇
GET 和 POST 的区别？
get: 请求一个指定资源，使用get的请求应该只用于获取数据
1.参数有长度限制，参数暴露在url中

post: 用于将实体提交到指定的资源，通常导致在服务器上的装特变化或副作用
1.参数在requestbody中

## 在浏览器中输出地址，按下回车发生了什么？
1. 解析URL，分析需要使用的传输协议和请求的资源的路径；
2. 判断缓存，判断所请求的资源是否在缓存里，如果缓存没有失效，直接使用，否则向服务器发起新的请求。
3. DNS域名解析
4. 获取MAC地址
5. TCP三次握手/https握手
6. 返回数据
7. 页面渲染
8. tcp四次挥手


## 前端路由
1. hash模式：监听url中hash的变化，渲染不同路径的组件，地址切换不会向服务端发送请求，不需要服务端支持。不利于seo优化
2. history路由： 监听url中的路径变化，需要服务端支持，配置回退路由，当url不匹配任何静态资源时，服务器应返回项目的index.html相同的页面。

## 堆和栈的区别
1. 堆： 存储数据的桶，没有特定顺序，顺序任意组合，由程序员自己管理，动态存储数组对象等数据结构
2. 栈： 后进先出，静态存储局部变量，临时变量
   