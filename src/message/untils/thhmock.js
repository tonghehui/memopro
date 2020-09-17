const Mock = require('mockjs')
const lan = localStorage.getItem('lan')
// 后台管理登录
console.log(lan)
const loginInSuccess = {
  code: 200,
  msg: 'success',
  data: {
    userName: 'thh',
    account: 'admin',
    password: '',
    loginTime: '2020-09-17 11:40'

  }
}
const loginInFail = {
  code: 403,
  msg: '无此用户，请先注册'
}

Mock.mock('/login', 'post', options => {
  return loginInSuccess
  // return loginInFail
})
