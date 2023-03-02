var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var tree = [
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
                        name: "level2"
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
var exampleResult = [
    {
        name: "level1/level1"
    },
    {
        name: "level1/level2/level2"
    },
    {
        name: "level1/level2/level3"
    }
];
/* 数组扁平化 */
var TreeToArry = function (treeOpt) {
    var res = [];
    treeOpt.forEach(function (treeItem) {
        var children = treeItem.children, i = __rest(treeItem, ["children"]);
        if (children && children.length) {
            res = res.concat(TreeToArry(children));
        }
        res.push(i);
    });
    return res;
};
function flatTree(node, path, result) {
    path = path || "";
    result = result || [];
    var nodePath = path === "" ? node.name : path + "/" + node.name;
    result.push({
        name: nodePath
    });
    if (node.children && node.children.length) {
        node.children.forEach(function (treeItem) {
            flatTree(treeItem, nodePath, result);
        });
    }
    return result;
}
var res = flatTree(tree[0]);
console.log(res);
