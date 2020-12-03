//---------------------增-----------------------
//creat方法测试 新建节点
const div = dom.create("<div><span>root</span></div>")
console.log(div);
//after方法测试 添加弟弟
const div2 = dom.create("<div>YoungNode</div>")
dom.after(test, div2)
//before方法测试 添加哥哥
const div3 = dom.create("<div>OldNode</div>")
dom.before(test, div3)
//append 添加儿子
const div4 = dom.create("<div>ChildNode</div>")
dom.append(test, div4)
//wrap 添加父级
const div5 = dom.create("<div>parentNode</div>")
dom.wrap(test, div5)
console.log(test);
//----------------------删----------------------
//remove 删除节点
const div6 = dom.create("<div id='ChildNode10'></div>")
const div7 = dom.create("<div id='ChildNode101'></div>")
const div8 = dom.create("<div id='ChildNode102'></div>")
dom.append(test, div6)
dom.append(div6, div7)
dom.append(div6, div8)
//console.log(dom.remove(div6))
//empty 删除后代
console.log(dom.empty(div6))
console.log(dom.empty(emptyTest))
//------------------------改--------------------
dom.attr(alter, 'name', 'alter') //加上name属性
console.log(dom.attr(alter, 'name')); //读name属性
dom.text(alter, 'xxxxxx') //修改文本属性
console.log(dom.text(alter)); //读name属性
dom.html(alter, '<span>add html</span>') //写标签内HTML
console.log(dom.html(alter)); //读标签内HTML
dom.style(alter, 'background', 'red') //读写style属性
dom.style(alter, {
    border: '2px solid blue'
})
console.log(dom.style(alter, 'border'));
//----------------------class----------------------
dom.class.add(classTest, 'blue')
//----------------------事件------------------------
fn = () => {
    console.log("事件发生了");
}
dom.on(alter, 'click', fn)
dom.off(alter, 'click', fn)
//----------------------查找------------------------
let alterNode = dom.find('#alter')[0]
console.log(alterNode);
console.log(dom.find('span', alterNode)[0]);
let parentNode = dom.find('#findTest')[0]
let childNode = dom.find('li', parentNode)[0]
console.log(dom.parent(childNode));
console.log(dom.children(parentNode));
console.log(dom.siblings(childNode));
let travelNode = dom.find('#travel')[0]
dom.each(dom.children(travelNode), n => dom.style(n, 'color', 'red'))
console.log(dom.index(travelNode));