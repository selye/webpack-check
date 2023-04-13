/* 浏览器渲染原理 */

/* 
html  dom
css   com 

渲染主线程
1. 预解析器 负责解析和加载link的css文件。主线程不会等待，继续后续的解析。
2. 渲染主线程遇到JS会暂停，等待JS下载完成才可以继续。因为JS的执行过程可能会修改当前
的dom/com树。

*/
const num = [2, 4, 5, 6, 12];
const target = 6;

/* 
{
  2 --- 0
}
*/

const twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(nums[i], i);
  }
  return [];
};

// 判断回文数
// 200
const isPalindrome = function (x) {
  const str = String(x);
  if (x < 0) return false;
  const rev = x.toString().split("").reverse().join("");
  return x == rev;
};

// 数字转换

/* 
LVIII 
L --- 50
V --- 5
III --- 3
58
IV
I --- 1
V --- 5
如果后一个值 > 前一个值 ，后一个值减去前一个值
*/
//
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prev = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    if (curr > prev) {
      result += curr - 2 * prev;
    }
    const romNum = romap.get(strToArr[i]);
    console.log(strToArr[i], romNum, sumRes);
    if (romNum > sumRes) {
      sumRes = romNum - sumRes;
    } else {
      sumRes += romNum;
    }
  }
  return sumRes;
};

// const result = romanToInt("MCMXCIV");
// console.log(result);

/* 

*/
// 判断公共前缀

var longestCommonPrefix = function (strs) {
  // if (strs.length = 0) return "";
  // let ans = strs[0];
  // for (let i = 1; i < strs.length; i++) {
  //   let j = 0;
  //   for (; j < ans.length && j < strs[i].length; j++) {
  //     if (ans[j] != strs[i][j]) break;
  //   }
  //   ans = ans.substr(0, j);
  //   if (ans === "") return ans;
  // }

  if (strs.length == 0) return "";
  let ans = strs[0];  // flower
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) break;
    }
    ans = ans.substr(0, j);
    if (ans === "") return ans;
  }
  return ans;

};

const s1 = ["flower", "flow", "flight"];
const result = longestCommonPrefix(s1);
console.log(result);
