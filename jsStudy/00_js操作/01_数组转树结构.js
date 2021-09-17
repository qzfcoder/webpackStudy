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
const arryToTree = (arr, id) => {
  let res = []
  arr.forEach(item => {
    if(item.pid === id) {
      let itemChildren = arryToTree(arr, item.id)
      if(itemChildren.length) {
        item.children = itemChildren
      }
    }
    res.push(item)
  })
  return res
}
console.log(arryToTree(arr,0))