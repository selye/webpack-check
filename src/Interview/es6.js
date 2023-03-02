/* 
  Set Map
*/

/* 
  Set: 类似于数组，但是所有成员都是唯一，是一种数据集合
*/
const s = new Set();
s.add(2).add(1).add(2);

/* 
  Map: 键值对的有序列表，键和值都可以为任意类型
*/

/* 浅拷贝 */
function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

const obj = {
  age: "14",
  name: "Jack",
  sex: "boy",
  love: () => {
    console.log("hj is a great girl");
  },
};
const obj2 = shallowClone(obj);
obj2.name = "rose";
// console.log(obj);
// console.log(obj2);

/* 解构赋值 */
const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr];
arr1[0] = 11;

/* 类 */
class Animal {
  move(distance) {
    console.log(`moved${distance}m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("wolf");
  }
}

const dog = new Dog();
dog.move();
dog.bark();
