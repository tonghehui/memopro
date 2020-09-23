const Mock = require('mockjs')
// const lan = localStorage.getItem('lan')
// 后台管理登录
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
// const loginInFail = {
//   code: 403,
//   msg: '无此用户，请先注册'
// }
const registerSuss = {
  code: 200,
  msg: '注册成功，可以去登录啦'
}

Mock.mock('/login', 'post', options => {
  return loginInSuccess
  // return loginInFail
})

Mock.mock('/register', 'post', options => {
  return registerSuss
})
