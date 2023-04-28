# 数据结构入门

- 数据结构分类：
    - 数组（Array）
    - 栈（Stack）
    - 链表（Linked List）
    - 图（Graph）
    - 散列表（Hash）
    - 队列（Queue）
    - 树（Tree）
    - 堆（Heap）

- 常考：Array, String, LinkedList, Tree(BT, BST), Stack, Queue, PriorityQueue(Heap), HashMap, HashSet
- 少考：Trie, Disjoint-Set(Union Find), Deque, Graph
- 一般不考，但是用来一题多解更快：TreeMap, TreeSet, Segment Tree(zkw Tree), Binary Index Tree(Fenwick Tree)

## Array数组
适用场景：频繁查询，对存储空间要求不大，很少增加和删除的情况。

- 基本操作：
    ```
    //打印数组
    int[]nums = new int[10];
    System.out.println(Arrays.toString(nums));
    ```

## String字符串——non primitive data type
- primitive type指的是：boolean, int, char, double, long, byte, short, float
- non-primitive type指的是：String, Arrays, Classes, Interfaces

- 常用method:
    ```
    str.substring();
    str.charAt(index);
    str1.compareTo(str2);
    ```
## Linked List链表

- 常用method，赋值取值时间复杂度均为 O(1)
    ```
    ListNode head = new ListNode(0); // 初始化
    head.next = new ListNode(1); // 赋值
    head.val; // 取值
    ```
适用场景：数据量比较小，需要频繁增加、删除操作的场景

## Tree树

- Binary Tree: 
    ```
    class TreeNode{
        TreeNode left;
        TreeNode right;
        public TreeNode(int val){
            this.val = val;
        }
    }
    ```

## Trie 前缀树或字典树 
字典树的性质：
1. 根节点（Root）不包含字符，除根节点外的每一个节点都仅包含一个字符
2. 从根节点到某一节点路径上所经过的字符连接起来，即为该节点所对应的字符串
3. 任意节点的所有子节点所包含的字符都不相同

- 基础method:
    ```
    addWord()
    searchWord()
    searchPrefix()
    // 时间复杂度均为 word.length
    ```

## Stack
- 常用method，时间复杂度均为O(1)
    ```
    stack.push(num)
    stack.peek()
    stack.pop()
    stack.isEmpty()
    ```