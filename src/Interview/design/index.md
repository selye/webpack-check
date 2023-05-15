## 前端常用设计模式

### 面向对象模式
```
// 不需要关注对象的实现，直接使用就可以
class Home{
	constructor(){
		this.xinxin = new xinxin()
		this.huanhuan = new huanhuan()
		this.jiejie = new jiejie()
	}
	toPlay(){
		console.log("go to play")
	}
}


let we = new Home();
we.toPlay();

```
1. 面向过程
	面向对象的底层，只不过将这个过程写在了对象的底层，面向过程的优缺点
		优点： 性能好，不用去**new**一个实例
		缺点：不容易维护、不容易扩展、不容易复用
2. 面向对象
	面向对象有继承、封装和多态的特性，面向对象的优势就是易维护、易扩展、易复用

- 面向对象继承
```
class A{
	toPlay(){
		console.log("go to play")
	}
}
class B extends A{

}
let b = new B()
b.toPlay()
```

- 面向对象多态
```
class A{
      toString(){
          console.log('A')
      }
  }
  class B extends A{
      toString(){
          console.log('B')
          super.toString();
      }
  }
  class C extends A{
      toString(){
          console.log('C')
          super.toString();
      }
  }
  
  let b = new B()
  b.toString()
  let c = new C()
  c.toString()
```

### 设计原则
1. 单一职责原则（类功能要单一，各自负责各自的模块）
2. 开放封闭原则（对扩展开放，对修改关闭，可以对功能进行扩展，减少对现有功能的修改）


### 未完待续


