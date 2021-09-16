## 数组转树形结构

```js
const arr = [
    {
        name: '小明',
        id: 1,
        pid: 0,
    },
    {
        name: '小花',
        id: 11,
        pid: 1,
    },
    {
        name: '小华',
        id: 111,
        pid: 11,
    },
    {
        name: '小李',
        id: 112,
        pid: 11,
    },
    {
        name: '小红',
        id: 12,
        pid: 1,
    },
    {
        name: '小王',
        id: 2,
        pid: 0,
    },
    {
        name: '小林',
        id: 21,
        pid: 2,
    },
    {
        name: '小李',
        id: 22,
        pid: 2,
    }
]

// 递归
const arrayToTree = (arr, pid) => {
    let res = [];
    arr.forEach(item => {
        if(item.pid === pid){
            let itemChildren = arrayToTree(arr,item.id);
            if(itemChildren.length) {
                item.children = itemChildren;
            }
            res.push(item);
        }
    });
    return res;
}
// const result = arrayToTree(arr);
const result = arrayToTree(arr, 0);
console.log(result);

// 运行结果
[
    {
        "name": "小明",
        "id": 1,
        "pid": 0,
        "children": [
            {
                "name": "小花",
                "id": 11,
                "pid": 1,
                "children": [
                    {
                        "name": "小华",
                        "id": 111,
                        "pid": 11
                    },
                    {
                        "name": "小李",
                        "id": 112,
                        "pid": 11
                    }
                ]
            },
            {
                "name": "小红",
                "id": 12,
                "pid": 1
            }
        ]
    },
    {
        "name": "小王",
        "id": 2,
        "pid": 0,
        "children": [
            {
                "name": "小林",
                "id": 21,
                "pid": 2
            },
            {
                "name": "小李",
                "id": 22,
                "pid": 2
            }
        ]
    }
]

```

## 树形结构转数组（扁平化）

```js
const tree = [
    {
        name: '小明',
        id: 1,
        pid: 0,
        children: [
            {
                name: '小花',
                id: 11,
                pid: 1,
                children: [
                    {
                        name: '小华',
                        id: 111,
                        pid: 11,
                    },
                    {
                        name: '小李',
                        id: 112,
                        pid: 11,
                    }
                ]
            },
            {
                name: '小红',
                id: 12,
                pid: 1,
            }
        ]
    },
    {
        name: '小王',
        id: 2,
        pid: 0,
        children: [
            {
                name: '小林',
                id: 21,
                pid: 2,
            },
            {
                name: '小李',
                id: 22,
                pid: 2,
            }
        ]
    }
]
// 1、深度优先遍历
const treeToArray = (tree) => {
    let stack = tree,
        result = [];
    while(stack.length !== 0){
        let pop = stack.pop();
        result.push({
            id: pop.id,
            name: pop.name,
            pid: pop.pid
        })
        let children = pop.children
        if(children){
            for(let i = children.length-1; i >=0; i--){
                stack.push(children[i])
            }
        }
    }
    return result
}
// 2、广度优先遍历
const treeToArray = (tree) => {
    let queue = tree,
        result = [];
    while(queue.length !== 0){
        let shift = queue.shift();
        result.push({
            id: shift.id,
            name: shift.name,
            pid: shift.pid
        })
        let children = shift.children
        if(children){
            for(let i = 0; i < children.length; i++){
                queue.push(children[i])
            }
        }
    }
    return result
}

const result = treeToArray(tree);
console.log(result);

// 运行结果
[
    {
        "name": "小明",
        "id": 1,
        "pid": 0
    },
    {
        "name": "小花",
        "id": 11,
        "pid": 1
    },
    {
        "name": "小华",
        "id": 111,
        "pid": 11
    },
    {
        "name": "小李",
        "id": 112,
        "pid": 11
    },
    {
        "name": "小红",
        "id": 12,
        "pid": 1
    },
    {
        "name": "小王",
        "id": 2,
        "pid": 0
    },
    {
        "name": "小林",
        "id": 21,
        "pid": 2
    },
    {
        "name": "小李",
        "id": 22,
        "pid": 2
    }
]

```

