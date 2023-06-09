# Must Known about CPP

## 全局变量、局部变量、静态变量和常量
**全局变量**是在所有函数体的外部定义的，程序的所有部分（其他文件的代码）都可以使用。全局变量不受作用域的影响。全局变量的生命周期一直到程序的结束**，**全局变量是静态存储方式**。

**局部变量**出现在一个作用域内，它们是局限于一个函数的。局部变量经常被称为自动变量，因为它们在进入作用域时，自动生成，离开作用域时自动消失。关键字auto可以显示的说明这个问题，但局部变量默认为auto，所以没必要声明为auto。通常函数里定义的变量，函数的参数都局部变量。所以一般需要在某个函数里，返回数组的地址或者指针之类，这时候必须定义成static，或者动态申请内存，这样函数结束返回时才不会释放掉那块内存空间。

**静态变量**的修饰关键字是**static**，static可以作用于变量以及函数。由static修饰的，可分为**静态局部变量，静态全局变量，静态函数**。**静态变量的生命期和程序生命期是一样的，在程序结束之后操作系统会回收空间。static函数和普通函数的区别：static函数在内存中只有一份，普通函数在每个被调用中维持一份复制品。在类中，静态成员函数的调用方式：**

💡 静态成员变量和静态成员函数都有两种访问方式：
1. 通过对象调用
2. 通过类名调用

## 类的static成员和函数
- 静态成员变量
    - 所有对象共享同一份数据
    - 在编译阶段分配内存
    - 类内声明，类外初始化
- 静态成员函数
    - 所有对象共享同一个函数
    - 静态成员函数只能访问静态成员变量
- 详解
    - 对象与对象之间的成员变量是相互独立的。要想共用数据，则需要使用静态成员和静态方法。
    - 只要在类中声明静态成员变量，即使不定义对象，也可以为静态成员变量分配空间，进而可以使用静态成员变量。（因为**静态成员变量在对象创建之前就已经被分配了内存空间**）
    - 静态成员变量虽然在类中，但它并不是随对象的建立而分配空间的，也不是随对象的撤销而释放（**一般的成员在对象建立时会分配空间，在对象撤销时会释放**）。**静态成员变量是在程序编译时分配空间，而在程序结束时释放空间。**
    - 静态成员的定义和声明要加个关键**`static`**。静态成员可以通过双冒号来使用，即`**<类名>::<静态成员名>**`。
    - **初始化静态成员变量要在类的外面进行**。初始化的格式如下：数据类型 类名::静态成员变量名 = 初值；
    - 不能用参数初始化表，对静态成员变量进行初始化。
    - 既可以通过**类名来对静态成员变量进行引用**，也可以通过**对象名来对静态成员变量进行引用。**
    - 普通成员函数和静态成员函数的区别是:普通成员函数在参数传递时编译器会隐藏地传递一个this指针.通过this指针来确定调用类产生的哪个对象;但是静态成员函数没有this指针,不知道应该访问哪个对象中的数据,所以在程序中不可以用静态成员函数访问类中的普通变量。静态成员函数只能访问静态成员变量

- 静态成员函数访问非静态成员
    - 方式一：在静态成员函数的参数列表中，传入一个该类的实例对象（实例的地址），可以通过该实例访问非静态成员变量
        
        ```cpp
        class A {
        public:
            static void test(A *a) {
                a->m_a += 1;
            }
            void hello() {
            }
        private:
            static int m_staticA;
            int m_a
        };
        ```
        
    - 方式二：静态成员函数可以访问静态成员，在类是单例类的情况下，可以在创建的时候把`this`指针赋值给那个静态成员，然后在静态成员函数内部访问`this`指向的静态成员：
        ```cpp
        class A {
        public:
            A() {
                m_gA = this;
            }
            static void test() {
                m_gA.m_a += 1;
            }
            void hello() {
            }
        private:
            static int m_staticA;
            static A *m_gA;
            int m_a
        }; 
        ```

## 空指针和野指针

### 空指针
指向对象为空的指针就被称为空指针，即就是给指针初始化或赋值NULL（NULL所对应的ASCII码就是0），那么该指针就被称为空指针。空指针表示不指向任何有效空间，当对空指针进行解引用时操作系统会报错，因为既然空指针代表不指向任何有效空间，那去访问该空间就毫无意义。

### 野指针

**什么是野指针：**

野指针是指向位置随机的、不正确的指针，系统无法对其进行操作；

**野指针的危害：**

野指针指向的位置是随机的， 危害也是随机的，不一定会产生错误。若程序产生错误，一般为内存泄露导致程序中断。严重的情况，若野指针指向的位置存放一个病毒，对其解引用后就会导致电脑中毒。


**野指针产生的原因：**

1.  创建指针时没有对指针进行初始化，导致指针指向一个随机的位置；
2. 释放指针指向的内存后没有置空NULL，从而指向垃圾内存；
3. 在超越变量作用域下使用指针，如：在栈内存被释放之后，指向栈内存的指针会指向垃圾内存；

**野指针的避免方法：**

1. 在创建指针时必须进行初始化；
2. 小心指针越界；
3. 避免返回局部变量的地址；
4. 在释放指针指向的内存之后必须将指针置空；
5. 指针使用之前检查有效性。

## 常量指针和指针常量
- 常量指针：**`const int * p`** 指针指向的地址存的值不能改变，但是指针本身可以改，指向别的地址
- 指针常量：**`int * const p`** 指针指向的地址中的值可以改变，但是不可以改变指针的指向。

## 数组作为函数参数

```cpp
int sum_arr (int att[] , int size){}
int sum_arr (int *att , int size){}
int sum_arr (int att , int size){}

//调用
sum_arr(att, size)
```
数组作为函数参数传递，值传递就是指针地址的传递，而这就与普通参数不一样了；因为数组的数据太多了，将其一一赋值既麻烦又浪费空间，所以数组作为参数传递给函数的只是数组首元素的地址，函数在需要用到后面元素时再按照这个地址和数组下标去查找。所以，函数调用的数组会对本身的数组造成影响，这点和普通参数的值传递是不同的。

传入数组名时，数组名代表的就是数组的首地址，所以数组名是不可以用 `&` 符来取别名的，即当数组作为函数参数进行传递时，不可以使用引用类型进行传递。

而此时在函数中不能通过 `sizeof(att)` 的方式计算数组的长度，因为传入的参数相当于指针，**指针在32位操作系统中占4个字节，在64位操作系统中占8个字节。**

💡 **利用指针作为函数参数，可以修改实参的值**
1. 值传递中，形参是拷贝的实参数值，修改形参不会影响实参
2. 地址传递中，形参拷贝了实参地址，用解引用访问这个地址，本质上修改的是实参地址上的实参
