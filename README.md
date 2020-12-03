## 简单封装的DOM库

dom.js ------DOM库

index.html,main.js--------测试

### 增

* dom.create(*string*) 创建节点
* dom.after(*node*,*nodeYoung*) 在node节点后创建一个弟弟节点
* dom.before(*node*, *nodeOld*) 在node节点前创建一个哥哥节点
* dom.append(*parent*, *node*) 在node节点后创建一个儿子节点
* dom.wrap(*node*, *parent*) 给node节点添加一个父节点

### 删

* dom.remove(*node*) 删除node节点
* dom.empty(*parent*) 删除一个节点的所有后代

### 改

* dom.attr(*node*, *name*, *value*) 用于读写标签节点属性

  两个参数：dom.attr(*node*, *name*) 读node节点的name属性

  三个参数：dom.attr(*node*, *name*, *value*) 写node节点的name属性为value

* dom.text(*node*, *string*) 用于读写文本节点的属性

  一个参数：dom.text(*node*)  读文本节点的文本

  两个参数：dom.text(*node*, *string*)  写文本节点的文本为string

* dom.html(*node*, *string*) 用于读写HTML

  一个参数：dom.html(*node*) 读节点的HTML内容

  两个参数：dom.html(*node*, *string*) 写节点的HTML内容

* dom.style(*node*, *name*, *value*) 读写style属性

  两个参数：dom.style(*node*, *name*） 读节点标签的style属性

  两个参数：dom.style(*node*, *object*） object对象格式写节点标签的style属性

  三个参数：dom.style(*node*, *name*, *value*) 单个键值对的格式来写节点标签的style属性

* dom.class.add(*node*, *className*)  节点添加class属性

* dom.class.remove(*node*, *className*) 节点删除某个class属性

* dom.class.has(*node*, *className*) 判读节点的class属性中是否包含className

### 查

* dom.find(*selector*, *scope*)  根据CSS选择器 查元素对象返回 (scope 表示在什么标签范围内查找这个元素，可省略)
* dom.parent(*node*) 查找节点的父节点
* dom.children(*node*) 查找节点的所有子节点
* dom. siblings(*node*) 查找节点的兄弟节点 
* dom.next(*node*) 查找节点的下一个节点 
*  dom.previous(*node*)  查找节点的上一个节点
*  dom.each(*nodeList*, *fn*)  遍历nodeList ，对每个节点对象执行fn函数
*  dom.index(*node*)  查找node在同级节点中的排名

### 事件

* dom.on(*node*, *eventName*, *fn*) 添加事件监听
* dom.off(*node*, *eventName*, *fn*) 移除事件监听