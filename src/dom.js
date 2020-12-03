window.dom = {
    //---------------------增-----------------------
    //创建节点
    create(string) {
        let container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild

    },
    //新增弟弟
    after(node, nodeYoung) {
        node.parentNode.insertBefore(nodeYoung, node.nextSibling);

    },
    //新增哥哥
    before(node, nodeOld) {
        node.parentNode.insertBefore(nodeOld, node);
    },
    //创建儿子
    append(parent, node) {
        parent.appendChild(node)
    },
    //新建爸爸，在两个节点之间一级新建一个节点
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)

    },
    //----------------------删----------------------
    //删除节点
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    //删除一个节点的所有后代
    empty(parent) {
        const {
            childNodes
        } = parent
        const arr = []
        // for (let i = 0; i < childNodes.length; i++) {
        //     //!!!注意:childNodes的长度会随着删除节点而实时改变,这个方法是错误的！
        //     dom.remove(childNodes[i])
        //     arr.push(childNodes[i])
        // }
        let x = parent.firstChild
        while (x) {
            arr.push(dom.remove(x))
            x = parent.firstChild
        }
        return arr
    },
    //----------------------改----------------------
    //用于读写标签节点属性
    attr(node, name, value) { //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length == 2) {
            return node.getAttribute(name)
        }
    },
    //用于读写文本节点的属性
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) { //适配不同的浏览器
                node.innerText = string //ie
            } else {
                node.textContent = string //chrome/firefox
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) { //适配不同的浏览器
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    //用于读写HTML
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML

        }
    },
    //读写style属性
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'color','red') 
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (name instanceof Object) {
                // dom.style(div,{'color','red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            } else if (typeof name === 'string') {
                // dom.style(div,'color')
                return node.style[name]

            }
        }
    },
    //----------------------class----------------------
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.add(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }

    },
    //----------------------事件----------------------
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    //----------------------查----------------------
    find(selector, scope) { //根据css选择器 查元素对象返回 scope 表示在什么标签内查找这个元素
        return (scope || document).querySelectorAll(selector)

    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter((item) =>
            item !== node
        )
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }

    },
    index(node) {
        let childList = dom.children(node.parentNode)
        let i
        for (i = 0; i < childList.length; i++) {
            if (childList[i] === node) {
                break;
            }
        }
        return i
    }

}