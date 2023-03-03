/* 计算一个正整数的阶乘 例如 5  5*4*3*2*1 */
function RecursionNum(Data) {
    if (Data === 1) {
        return 1;
    }
    return Data * RecursionNum(Data - 1);
}
// console.log(RecursionNum(5))
/*
1. 5* Rec(4)
2. 5* (4 * Rec(3))
3. 5* (4 * (3 * Rec(2)))
4. 5* (4*  (3 * (2 * Rec(1))))
5. 5*4*3*2*1
*/
/* 通过reduce计算阶乘 */
var RecuList = [5, 4, 3, 2, 1,];
function ReduceRecursion(list) {
    return list.reduce(function (pre, current) {
        return pre * current;
    });
}
// console.log(ReduceRecursion(RecuList));
/* 斐波那契数列 */
/*
斐波那契数列由 0 和 1 开始 之后的系数由之前的两数相加
F0 =0, f1 = 1, f2 = 1 f3 = 2  f4 = 3
3 = 1 + 1
4 = 2 + 1
fn = fn-1 + fn-2
[1,1,2,3,5,8,13,21]
*/
function getFeiboNum(number) {
    if (number === 1 || number === 2) {
        return 1;
    }
    return getFeiboNum(number - 1) + getFeiboNum(number - 2);
}
// console.log(getFeiboNum(7))
/* 编写一个递归函数，找出数组中最大的数值 */
/*
【1,2,3,4,7,6,12,32,2】
得 32
*/
function findMax(list) {
    return list.reduce(function (pre, current) {
        return pre > current ? pre : current;
    });
}
var numberList = [1, 5, 10, 15, 13];
// console.log(findMax(numberList))
function findIndex(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    var mid = Math.floor(arr.length / 2);
    var leftMax = findIndex(arr.slice(0, mid));
    var rightMax = findIndex(arr.slice(mid));
    return Math.max(leftMax, rightMax);
}
/*
[1,2,3,4,5,6]
1、 [1,2,3]  [4,5,6]
2、 [1],[2,3]   [4],[5,6]
3、  1 3   4  6
4、  3   6
5    6
*/
/* 编写一个递归函数 反转一个字符串  如ReverseString("hello") 返回 "olleh" */
/* hello */
function ReverseString(str) {
    if (str.length < 2) {
        return str;
    }
    console.log(str);
    return ReverseString(str.slice(1));
}
console.log(ReverseString("hello"));
/*

1. hello
2. elloh
3. llohe
4. lohel
5. ohell
*/
