const arr = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
  {
    id: 4,
    pid: 0,
    name: "body",
  },
];

/* 
期望输出：
  [
    {
      id: 1,
      name: "body"
      children: [
        { 
          id: 2,
          parentid: 1,
          name: "title",
          children: [
            {
              id: 3,
              parentid: 2,
              name: "div"
            }
          ]
        }
      ]
    }
  ]

*/

// function toTree(data) {
//   const result = [];
//   const map = {};
//   data.forEach((item) => {
//     map[item.id] = item;
//   });
//   /*
//   map {
//     1: {
//         id: 1,
//         pid: 0,
//         name: "body",
//     }
//     2: {
//         id: 2,
//         pid: 1,
//         name: "title",
//     }
//   }
//   */
//   /*
//  parent map[0] 无
//  parent map[1] 有
//  parent map[2] 有
//  parent map[0] 无

//  result [
//   {
//     id: 1,
//     pid: 0,
//     name: "body",
//   },

//  forEach,对数组的每一个元素执行一次给定的函数
//  ]
//  */
//   data.forEach((item) => {
//     let parent = map[item.pid];
//     if (parent) {
//       (parent.children || (parent.children = [])).push(item);
//       // console.log(parent)
//     } else {
//       result.push(item);
//       console.log(JSON.stringify(result));
//     }
//   });
//   return result;
// }

// console.log(toTree(arr));

// function toTree(data) {
//   const result = [];
//   const map = {};
//   // 1。先构建map结构，以id为map的key
//   data.forEach((item) => {
//     map[item.id] = item;
//   });
//   // 2. 循环目标数组，判断上面构建的map，是否存在当前遍历的pid
//   data.forEach((item) => {
//     let parent = map[item.pid];
//     if (parent) {
//       // 3. 存在 进行children的插入
//       (parent.children || (parent.children = [])).push(item);
//     } else {
//       // 4. 不存在，是顶级节点
//       result.push(item);
//     }
//   });
//   return result;
// }

/* 

map = {
  1: {
    id: 1,
    pid: 0,
    name: "body"
  },
  2: {
    id: 2,
    pid: 1,
    name: "title"
  },
  3: {
    id: 3,
    pid: 2,
    name: "div"
  }
}

parent: {
    id: 1,
    pid: 0,
    name: "body"
}

result: [
  
]

*/

/* 递归解法 */

function findParent(item, roots) {
  for (const root of roots) {
    if (root.id === item.pid) {
      return root;
    }
    const parent = findParent(item, root.children);
    if (parent) {
      return parent;
    }
  }
}

/* 
roots [
  {
    id: 1,
    pid: 0,
    name: "body",
  }
]
*/

function toTree(data) {
  const roots = [];
  for (const item of data) {
    if (item.pid === 0) {
      // 顶级菜单
      item.children = [];
      roots.push(item);
    } else {
      const parent = findParent(item, roots);
      if (parent) {
        item.children = [];
        parent.children.push(item);
      }
    }
  }
  return roots;
}

// console.log(toTree(arr));

const treeData = [
  {
    id: 1,
    pid: 0,
    name: "code",
    children: [
      {
        id: 2,
        pid: 1,
        name: "html",
      },
      {
        id: 3,
        pid: 1,
        name: "css",
      },
      {
        id: 4,
        pid: 1,
        name: "javascript",
      },
    ],
  },
  {
    id: 5,
    pid: 0,
    name: "phone",
    children: [
      {
        id: 6,
        pid: 5,
        name: "apple",
      },
      {
        id: 7,
        pid: 5,
        name: "samsung",
      },
      {
        id: 8,
        pid: 5,
        name: "xiaomi",
      },
    ],
  },
];
/* 
  遍历数组
  如果有子元素，遍历子元素 将子元素拿出 添加到result
  如果没有子元素，
*/

// function flatTree(arr = []) {
//   let result = [];
//   arr.forEach((item) => {
//     const { children, ...i } = item;
//     if (children && children.length) {
//       result = result.concat(flatTree(item.children));
//     }
//     result.push(i);
//   });
//   return result;
// }

// function flatTree(data) {
//   let res = [];
//   for (const item of data) {
//     const { children, ...i } = item;
//     if (children && children.length) {
//       res = res.concat(flatTree(children));
//     }
//     res.push(i);
//   }
//   return res;
// }

/* 
  children: [
      {
        id: 2,
        pid: 1,
        name: "html",
      },
      {
        id: 3,
        pid: 1,
        name: "css",
      },
      {
        id: 4,
        pid: 1,
        name: "javascript",
      },
  ]
*/

// function flatTree(data = []) {
//   return data.reduce((pre, cur) => {
//     const { children, ...i } = cur;
//     return pre.concat(i, children && children.length ? flatTree(children) : []);
//   }, []);
// }

// console.log(flatTree(treeData));

const repeatObj = [
  {
    id: 1,
    name: "JJ1",
  },
  {
    id: 2,
    name: "JJ2",
  },
  {
    id: 1,
    name: "JJ1",
  },
  {
    id: 4,
    name: "JJ4",
  },
  {
    id: 2,
    name: "JJ2",
  },
];

/* 
  去重：去除id重复的项
*/

// function unique(data = []) {
//   const result = [];
//   for (const item of data) {
//     const findItem = result.findIndex((_item) => _item.id === item.id);
//     if (findItem < 0) {
//       result.push(item);
//     }
//   }
//   return result;
// }

function unique(data = []) {
  return data.reduce((pre, cur) => {
    const findIndex = pre.findIndex((_item) => _item.id === cur.id);
    return pre.concat(findIndex < 0 ? cur : []);
  }, []);
}

console.log(unique(repeatObj));
