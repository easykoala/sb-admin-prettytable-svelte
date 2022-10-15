import Mock from 'mockjs'

Mock.mock('/userList', /post|get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|529': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    "name":"@cname",
    // 随机数字1-100
    'number|1-100': 100,
    "province": "@province",
    "email": "@email",
    "birthday": "@date(yyyy-MM-dd)"
  }]
})


const data={
  "id":"@guid",
  "name":"@cname",
};

Mock.mock('/api/test', 'post', data)
