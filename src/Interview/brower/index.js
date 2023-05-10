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

  // if (strs.length == 0) return "";
  // let ans = strs[0];  // flower
  // for (let i = 1; i < strs.length; i++) {
  //   let j = 0;
  //   for (; j < ans.length && j < strs[i].length; j++) {
  //     if (ans[j] != strs[i][j]) break;
  //   }
  //   ans = ans.substr(0, j);
  //   if (ans === "") return ans;
  // }
  // return ans;

  if (!strs || !strs.length) {
    return "";
  }
  let prefix = strs[0]; // 默认第一个字符为最长公共前缀
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // substr (start, length)
      // substring (start, end)
      // 与数组中的字符遍历，如果发现与最长字符不相同，就讲最长字符缩短一，直至为空
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix);
      if (!prefix) return "";
    }
  }
  return prefix;
};

// const s1 = ["flower", "flow", "flight"];
// const result = longestCommonPrefix(s1);
// console.log(result);

// 判断括号是否有效
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      // 如果数组为空 或者 数组最后一个值不是 左括号
      if (!stack.length || stack.pop() !== "(") {
        return false;
      }
    } else if (char === "]") {
      if (!stack.length || stack.pop() !== "[") {
        return false;
      }
    } else if (char === "}") {
      if (!stack.length || stack.pop() !== "{") {
        return false;
      }
    }
  }
  return !stack.length;
};

// const result = isValid("([{}])");
// console.log(result);

var mergeTwoLists = function (list1, list2) {
  if (!list1.length || !list2.length) return [];
  const res = [...list1, ...list2].sort();
  return res;
};
// const result = mergeTwoLists([1, 2, 4], [1, 3, 4]);
// console.log(result);

// 数组去重
var removeList = function (arrlist) {
  let res = [];
  arrlist.forEach((item) => {
    if (res.indexOf(item) === -1) {
      res.push(item);
    }
  });
  return res;
};

// const res = removeList([1, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5]);
// console.log(res);

var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

// const result = removeElement([1, 1, 2, 3, 4, 5, 2], 2);
// console.log(result);

// [1,2,3,4,5,6,7]
// 5
// left 0 123
// right 6 567
// mid 4
// left 4 5
// right 6  7
// mid 6
// 0   4   2
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

//找出字符串中最后一个字符的长度

var lengthOfLastWord = function(s) {
  
};
