interface TreeNode {
  name?: string;
  children?: TreeNode[] | undefined
}

const tree: TreeNode[] = [
  {
    name: "level1",
    children: [
      {
        name: "level1"
      },
      {
        name: "level2",
        children: [
          {
            name: "level2",
          },
          {
            name: "level3"
          }
        ]
      }
    ]
  }
];

/* 
  1.遍历数组
  2.拿到每一项的name
  3.如果有children，继续遍历拿到name

*/

const exampleResult = [
  {
    name: "level1/level1",
  },
  {
    name: "level1/level2/level2"
  },
  {
    name: "level1/level2/level3"
  }
];

/* 数组扁平化 */
const TreeToArry = (treeOpt: TreeNode[]) => {
  let res: any[] = []
  treeOpt.forEach((treeItem) => {
    const { children, ...i } = treeItem;
    if (children && children.length) {
      res = res.concat(TreeToArry(children))
    }
    res.push(i)
  })
  return res
};

/* 
  递归

*/

function flatTree(node: TreeNode, path?: string, result?: any[]) {
  path = path || "";
  result = result || [];
  const nodePath = path === "" ? node.name : path + "/" + node.name;
  result.push({
    name: nodePath
  })

  if (node.children && node.children.length) {
    node.children.forEach((treeItem) => {
      flatTree(treeItem, nodePath, result)
    })
  }
  return result

}

const res = flatTree(tree[0]);
console.log(res)
