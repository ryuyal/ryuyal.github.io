import{_ as s,c as a,b as l,o as n}from"./app-B_RBuSxH.js";const t={};function e(h,i){return n(),a("div",null,i[0]||(i[0]=[l(`<h2 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象"><span>类与对象</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>一个完整的类：</p><ol><li>核心组成部分 <ul><li>属性（实例变量-每个对象独立拥有的属性、静态变量-类级别共享）</li><li>构造方法：初始化对象状态</li><li>实例方法：定义对象的行为，可以访问实例变量和静态变量</li><li>静态方法：定义类级别的行为，只能访问静态变量</li><li>Getter/Setter：控制字段的访问权限（封装性）</li><li>访问修饰符（封装）：控制类成员的可见性</li></ul></li><li>面向对象特性 <ul><li>继承（extends）：复用代码，建立类层次关系</li><li>多态（方法重写、父类引用子类对象）</li><li>抽象类与接口</li><li>内部类：逻辑分组，增强封装性</li></ul></li><li>扩展内容 <ul><li>枚举类型</li><li>注解</li><li>泛型</li><li>单例模式</li></ul></li></ol></div><ul><li>类设计原则 <ul><li>单一职责原则：一个类只负责一个功能领域</li><li>开闭原则：对扩展开放，对修改封闭（通过继承/组合扩展）</li><li>高内聚低耦合：类内部高度聚合，类之间依赖最小化</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 实例变量（对象特有属性）</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 静态变量（类级别共享）</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> species</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Human</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 构造方法（初始化对象）</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 实例方法</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> introduce</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hi, I&#39;m </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> age </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> years old.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 静态方法</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> displaySpecies</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Species: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> species</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // Getter &amp; Setter（可选）</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> setName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 测试入口</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 创建对象（触发堆内存分配）</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Person</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> alice</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Alice</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        alice</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">introduce</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 输出: Hi, I&#39;m Alice, 30 years old.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 访问静态变量</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">species</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 输出: Human</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">displaySpecies</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">             // 输出: Species: Human</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 修改静态变量（影响所有实例）</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">species</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Homo sapiens</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Person</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">species</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 输出: Homo sapiens</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类和对象的内存分配机制-对象创建的流程分析" tabindex="-1"><a class="header-anchor" href="#类和对象的内存分配机制-对象创建的流程分析"><span>类和对象的内存分配机制（对象创建的流程分析）</span></a></h3><ul><li>Java内存的结构分析 <ul><li>栈区(Stack)：存储 <mark>局部变量</mark> 、<mark>方法调用栈帧</mark></li><li>堆区(Heap)：存储所有<mark>对象实例和数组</mark></li><li>方法区：<mark>类结构</mark>、<mark>静态变量</mark>、<mark>常量池</mark>、<mark>JIT代码</mark></li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此处加配图：对象创建的流程分析 内存分配 方法调用过程等</p></div><p>在Java中，对象创建和内存分配涉及多个内存区域的协作，以创建一个<code>Person</code>类对象为例，分析内存结构的关键步骤如下：</p><div class="vp-steps"><ol><li><p><strong>类加载</strong> 方法区：</p><ul><li>加载类的字节码文件（<code>.class</code>文件）</li><li>存储静态变量<code>species</code>，初始化值为<code>&quot;Human&quot;</code></li><li>存储方法代码（构造方法、<code>introduce()</code>、<code>displaySpecies()</code>等方法的字节码）</li><li>存储常量池（如字符串常量 <code>&quot;Hi, I&#39;m &quot;</code>）</li></ul></li><li><p><strong>对象实例化（堆内存）</strong></p><ul><li>分配对象内存空间（包含对象头、实例变量name和age）</li><li>name字段指向堆中独立的String对象（存储 &quot;Alice&quot; 的字符数组）</li><li>age字段直接存储原始值30</li></ul></li><li><p><strong>栈内存与引用关联</strong></p><ul><li>main 方法的栈帧中存储局部变量 alice（保存堆中 Person 对象的内存地址）</li><li>方法调用时（如 alice.introduce()），栈中压入新的栈帧（存储方法参数、局部变量等）</li></ul></li><li><p><strong>方法调用</strong> 栈帧管理方法调用过程中的参数传递和局部变量</p></li><li><p><strong>静态变量访问</strong> 直接读写方法区中的静态变量species（无需对象实例）</p></li></ol></div><h3 id="成员方法的传参机制" tabindex="-1"><a class="header-anchor" href="#成员方法的传参机制"><span>成员方法的传参机制</span></a></h3><ul><li>基本数据类型：传递的是<strong>值（值拷贝）</strong>，形参的改变不影响实参</li><li>引用数据类型：传递的是<strong>地址（传递的也是值，但是值是地址）</strong>，可以通过形参影响实参</li></ul><h3 id="方法重载-overload" tabindex="-1"><a class="header-anchor" href="#方法重载-overload"><span>方法重载（Overload）</span></a></h3><ul><li>方法名：必须相同</li><li>形参列表：形参类型或个数或顺序，至少有一样不同，参数名无要求</li><li>返回类型：无要求</li></ul><h3 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符"><span>访问修饰符</span></a></h3><table><thead><tr><th>访问级别</th><th style="text-align:center;">访问控制修饰符类</th><th style="text-align:right;">同类</th><th style="text-align:right;">同包</th><th style="text-align:right;">子类</th><th style="text-align:right;">不同包</th></tr></thead><tbody><tr><td>公开</td><td style="text-align:center;">public</td><td style="text-align:right;">✔</td><td style="text-align:right;">✔</td><td style="text-align:right;">✔</td><td style="text-align:right;">✔</td></tr><tr><td>受保护</td><td style="text-align:center;">protected</td><td style="text-align:right;">✔</td><td style="text-align:right;">✔</td><td style="text-align:right;">✔</td><td style="text-align:right;">❌</td></tr><tr><td>默认</td><td style="text-align:center;">无修饰符</td><td style="text-align:right;">✔</td><td style="text-align:right;">✔</td><td style="text-align:right;">❌</td><td style="text-align:right;">❌</td></tr><tr><td>私有</td><td style="text-align:center;">private</td><td style="text-align:right;">✔</td><td style="text-align:right;">❌</td><td style="text-align:right;">❌</td><td style="text-align:right;">❌</td></tr></tbody></table><h2 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程"><span>面向对象编程</span></a></h2><p><mark>封装</mark>、<mark>继承</mark>、<mark>多态</mark></p><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h3><p><strong>封装</strong>：把抽象出的数据【属性】和对数据的操作【方法】封装在一起，数据被保护在内部，程序的其他部分只有通过被授权的操作【方法】，才能对数据进行操作。</p><p>封装的步骤：</p><ul><li>将属性私有化<code>private</code></li><li>提供公共的<code>public</code> <code>set</code>方法，用于对属性判断并赋值</li><li>提供公共的<code>public</code> <code>get</code>方法，用于获取属性的值</li></ul><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3><p><strong>继承</strong>：当多个类之间存在相同的属性和方法时，可以从这些类中抽象出符类，在父类中定义这些相同的属性和方法，子类通过<code>extends</code>来声明继承父类即可拥有父类定义的属性和方法，从而建立类之间的层级关系，实现代码复用和逻辑扩展。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>添加继承的本质分析</p><p>继承的内存布局</p></div><h4 id="super和this关键字的对比" tabindex="-1"><a class="header-anchor" href="#super和this关键字的对比"><span>super和this关键字的对比</span></a></h4><table><thead><tr><th style="text-align:center;">区别点</th><th style="text-align:left;"><strong>this</strong></th><th style="text-align:left;"><strong>super</strong></th></tr></thead><tbody><tr><td style="text-align:center;">访问<br>属性</td><td style="text-align:left;">访问本类中的属性，如果本类没有此属性，则从父类继续查找</td><td style="text-align:left;">从父类开始查找属性</td></tr><tr><td style="text-align:center;">调用<br>方法</td><td style="text-align:left;">访问本类中的方法，如果本类没有此方法，则从父类继续查找</td><td style="text-align:left;">从父类开始查找方法</td></tr><tr><td style="text-align:center;">调用<br>构造器</td><td style="text-align:left;">调用本类构造器，必须放在构造器的首行</td><td style="text-align:left;">调用父类构造器，必须放在子类构造器的首行</td></tr><tr><td style="text-align:center;">特殊</td><td style="text-align:left;">表示当前对象</td><td style="text-align:left;">子类中访问父类对象</td></tr></tbody></table><h4 id="方法重写-override" tabindex="-1"><a class="header-anchor" href="#方法重写-override"><span>方法重写（Override）</span></a></h4><p><strong>方法重写</strong>：子类重写父类的方法，子类中的某个方法和父类中某个方法的名称、返回类型、形参列表都一样。</p><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h3><p><strong>多态</strong>的前提是，两个对象（类）存在继承关系</p><div class="hint-container important"><p class="hint-container-title">重要</p><ul><li>一个对象的编译类型和运行类型可以不一致</li><li>编译类型在定义对象时，就确定了，不能改变</li><li>运行类型是可以变化的</li><li>编译类型看定义时<code>=</code>号的左边，运行类型看<code>=</code>号的右边</li></ul></div><h4 id="多态的向上转型" tabindex="-1"><a class="header-anchor" href="#多态的向上转型"><span>多态的向上转型</span></a></h4><ul><li>父类引用指向子类对象</li><li>语法：<strong><code>父类类型 引用名=new 子类类型();</code></strong></li><li>特点：编译类型看左边，运行类型看右边。 <ul><li>可以调用父类中的所有成员（需遵守访问权限）</li><li>不能调用子类中特有成员</li><li>最终运行效果看子类的具体实现</li></ul></li></ul><h4 id="多态的向下转型" tabindex="-1"><a class="header-anchor" href="#多态的向下转型"><span>多态的向下转型</span></a></h4><ul><li>语法:<strong><code>子类类型引用名=(子类类型)父类引用</code></strong></li><li>只能强转父类的引用，不能强转父类的对象</li><li>要求父类的引用必须指向的是当前目标类型的对象</li><li>当向下转型后，可以调用子类类型中所有的成员</li></ul><h3 id="java的动态绑定机制" tabindex="-1"><a class="header-anchor" href="#java的动态绑定机制"><span>Java的动态绑定机制</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><ol><li>当调用对象<mark>方法</mark>的时候，该方法会和该对象的<mark>内存地址/运行类型</mark>绑定</li><li>当调用对象<mark>属性</mark>的时候,<mark>没有动态绑定机制</mark>，哪里声明，哪里使用</li></ol></div>`,37)]))}const k=s(t,[["render",e],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/java_lang/ojowjiih/","title":"面向对象编程","lang":"zh-CN","frontmatter":{"title":"面向对象编程","createTime":"2025/03/02 22:33:28","icon":"mdi-cube-send","permalink":"/java_lang/ojowjiih/"},"headers":[],"readingTime":{"minutes":5.92,"words":1775},"git":{"updatedTime":1741185149000,"contributors":[{"name":"ryuyal","username":"ryuyal","email":"helloliu777@163.com","commits":2,"avatar":"https://avatars.githubusercontent.com/ryuyal?v=4","url":"https://github.com/ryuyal"}]},"filePathRelative":"notes/back_end/java_lang/improve/01.25-03-02-oop.md","bulletin":false}');export{k as comp,d as data};
