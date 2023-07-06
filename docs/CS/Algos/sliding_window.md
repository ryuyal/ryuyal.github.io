---
title: 滑动窗口
---

# 滑动窗口

## 最小滑动窗口

**最小滑窗模板：给定数组 nums，定义滑窗的左右边界 i, j，求满足某个条件的滑窗的最小长度。**

```C++
while j < len(nums):
    判断[i, j]是否满足条件
    while 满足条件：
        不断更新结果(注意在while内更新！)
        i += 1 （最大程度的压缩i，使得滑窗尽可能的小）
    j += 1
```

## 最大滑动窗口

**最大滑窗模板：给定数组 nums，定义滑窗的左右边界 i, j，求满足某个条件的滑窗的最大长度。**

```C++
while j < len(nums):
    判断[i, j]是否满足条件
    while 不满足条件：
        i += 1 （最保守的压缩i，一旦满足条件了就退出压缩i的过程，使得滑窗尽可能的大）
    不断更新结果（注意在while外更新！）
    j += 1
```

## 滑动窗口代码模板
```C++
// 字符串相关
unordered_map<char, int> need, window; 
int left = 0, right = 0;

/* 滑动窗口算法框架 */
void slidingWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char ch : t) {
        ++need[ch];
    }

    
    int left = 0, right = 0;
    int count = 0; 
    while (right < s.size()) {
        // c 是将移入窗口的字符
        char ch = s[right];
        
        // 进行窗口内数据的一系列更新
        window[ch]++;

        // 当前right对应s的字符是在t中出现的，并且数量上还没有达到冗余，是一次有效添加
        if(window[ch] <= need[ch]){ // 说明ch有用
            cnt++;
        }

        /*** debug 输出的位置 ***/
        printf("window: [%d, %d)\n", left, right);
        /********************/
        
        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            char d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }

        if (cnt == t.size()){
            // 窗口内已经满足t串的所有字符
            ···
        }

    // 右移窗口
        right++;
    }
}

```

## 区别：

- 最大滑窗是在迭代右移右边界的过程中更新结果
- 最小滑窗是在迭代右移左边界的过程中更新结果。