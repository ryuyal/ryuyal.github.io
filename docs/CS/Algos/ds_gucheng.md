# 数据结构(Java)

## 基础数据结构
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
- Java中的集合体系结构
    ![](./ds_notes/collections.png)

### Array数组
> 适用场景：频繁查询，对存储空间要求不大，很少增加和删除的情况。

- 基本操作：
    ```
    //打印数组
    int[]nums = new int[10];
    System.out.println(Arrays.toString(nums));
    ```

### String字符串——non primitive data type
- primitive type指的是：boolean, int, char, double, long, byte, short, float
- non-primitive type指的是：String, Arrays, Classes, Interfaces

- 常用method:
    ```
    str.substring();
    str.charAt(index);
    str1.compareTo(str2);
    ```
### Linked List链表

- 常用method，赋值取值时间复杂度均为 O(1)
    ```
    ListNode head = new ListNode(0); // 初始化
    head.next = new ListNode(1); // 赋值
    head.val; // 取值
    ```
适用场景：数据量比较小，需要频繁增加、删除操作的场景

### Tree树

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

### Trie 前缀树或字典树 
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

### Stack栈 Last In First Out(LIFO) or First In Last Out(FILO)
> 甲骨文官方doc推荐使用 `Deque` 来代替Stack，因为内部实现更合理，**Vector vs Queue interface**。`Deque<Integer> stack = new ArrayDeque<Integer>();`
> 
> `Stack<Integer> stack = new Stack<>();` 也可
- 常用method，时间复杂度均为O(1)
    ```
    stack.push(num)
    stack.peek()
    stack.pop()
    stack.isEmpty()
    ```
- DFS

### Queue队列 First In First Out(FIFO)
> `Queue<Integer> queue = new LinkedList<>();`

- 常用方法，时间复杂度均为O(1)。相比 `add` 和 `remove` 方法，更推荐 `offer` 和 `poll` 方法进行添加和删除的操作（可以处理空的操作）。
    ```
    queue.offer(1);
    queue.offer(2);
    queue.poll();
    queue.poll();
    ```
- BFS

### Deque双端队列（Double-ended queue）
> `Deque<Integer> deque = new ArrayDeque<>();`
> 
> `Deque<Integer> deque = new LinkedList<>();`

- 常用方法，时间复杂度均为O(1)
    ```
    deque.offerLast(1); // 1
    deque.addLast(2); // 1->2
    deque.offerFirst(0); // 0->1->2
    deque.peekFirst(); // return 0
    deque.pollFirst(); // return 0, 剩下1->2
    deque.pollLast(); // return 2
    ```

### PriorityQueue(Heap) 堆(最大堆，最小堆)
> 最大堆和最小堆的差别在于节点的排序方式。最大堆中，父节点的值比每一个子节点的值都要大。最小堆中，父节点的值比每一个子节点的值都要小。Java中`PriorityQueue`默认最小堆

> 初始化 `PriorityQueue<Integer> pq = new PriorityQueue<>();`

- 常用方法
    ```
    pq.offer(2); // 时间复杂度O(logn)
    pq.add(0); // 时间复杂度O(logn) 
    pq.add(1);
    pq.peek(); // return 0, 时间复杂度O(1)
    pq.poll(); // return 0, 时间复杂度O(logn)
    pq.poll(); // return 1, 时间复杂度O(logn)
    ```
- pq的应用和array手动实现heap

### Map散列表, 哈希表
> key和value之间的映射
> 
> 初始化 `Map<String, Integer> map = new HashMap<>();`

- 常用方法，添加和查找时间复杂度为O(1)
    ```
    map.put("A", 0);
    map.put("B", 1);
    map.put("C", 2);
    map.get("A"); //return 0
    map.get("C"); // return 2
    map.containsKey("B"); // return true
    map.toString(); // {A=0, B=1, C=2}
    ```
- 2个不同的key对应的index出现冲突的时候
  - 挂链法 seperate Chaining
  - 开放地址法 open addressing

- 查找比纯链表快，插入删除比纯数组快

### Set
> HashSet底层使用HashMap来保存所有元素
> 
> 初始化 `Set<Integer> set = new HashSet<>();`

- 常用方法 时间复杂度O(1)
    ```
    set.add(1);
    set.add(2);
    set.contains(1); // return true
    set.contains(3); // return false
    ```

### TreeMap
> 和HashMap用法几乎一致，但是提供了key本身有顺序，可以对元素进行排序操作

- 常用方法，时间复杂度O(logn)
    ```
    put(key, value)
    lowerKey() // <
    floorKey() // <=
    higherKey() // >
    ceilingKey() // >=
    ```

### TreeSet
> 几乎和HashSet一样，唯一区别是element现在有顺序了

- 常用方法
    ```
    first(); // 返回最小的元素
    lower(num);
    floor(num);
    higher(num);
    ceiling(num);
    ```

### Disjoint-Set(Union Find) 并查集