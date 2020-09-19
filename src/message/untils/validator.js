// 校验邮箱
const validateMailbox = (rule, value, callback) => {
  // let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  const lan = localStorage.getItem('lan')
  if (
    value.trim() === '' ||
    value.indexOf(' ') !== -1 ||
    value.indexOf('@') === -1
  ) {
    const error =
        lan == 'zh' ? '请输入有效的邮箱地址' : 'please enter valid email address'
    return callback(new Error(error))
  } else if (value.length > 30) {
    const error =
        lan == 'zh'
          ? '邮箱地址长度不能超过30'
          : 'email length should less than 30.'
    return callback(new Error('邮箱地址长度不能超过30!'))
  }

  callback()
}

const validateFullName = (rule, value, callback) => {
  const reg = /\s/
  if (value.trim() === '') {
    return callback(new Error('该选项必填!'))
  } else if (!reg.test(value)) {
    return callback(new Error('名称中间必须包含空格!'))
  }

  callback()
}
// 校验密码
const validatePassword = (rule, value, callback) => {
  // let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
  const reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,20}$/

  const lan = localStorage.getItem('lan')
  if (value.trim() === '' || !reg.test(value)) {
    const error =
        lan == 'zh'
          ? '必须包含数字、字母、字符中的两种，8-20位'
          : 'Must be 2 combinations of letters, characters or numbers, 8-20 digits'
    return callback(new Error(error))
  }

  callback()
}
// 校验验证码 以及资金密码
const validateCode = (rule, value, callback) => {
  const reg = /^\d{6}$/
  const lan = localStorage.getItem('lan')
  if (value.trim() === '') {
    const error = lan == 'zh' ? '验证码不能为空' : 'code cannot be empty'
    return callback(new Error(error))
  } else if (!reg.test(value)) {
    const error = lan == 'zh' ? '验证码须为6位数字' : 'code must be 6 digits'
    return callback(new Error(error))
  }

  callback()
}

const validateIdentificationCode = (rule, value, callback) => {
  const reg = /^\d{9}$/
  const lan = localStorage.getItem('lan')
  if (value.trim() === '') {
    const error = lan == 'zh' ? '验证码不能为空' : 'code cannot be empty'
    return callback(new Error(error))
  } else if (!reg.test(value)) {
    const error = lan == 'zh' ? '验证码须为6位数字' : 'code must be 6 digits'
    return callback(new Error(error))
  }

  callback()
}
// 验证身份证后6位
const validateIndentyTail = (rule, value, callback) => {
  const regAll = /^[A-Z\d]+$/
  const regNum = /^[0-9]\d*$/
  const regCap = /^[A-Z]+$/
  const error = '请输入合法的身份证后6位字符'
  if (!regAll.test(value)) {
    return callback(new Error(error))
  }
  if (value.length !== 6) {
    return callback(new Error(error))
  }

  if (regCap.test(value.charAt(value.length - 1))) {
    const value2 = value.substring(0, value.length - 1)
    if (!regNum.test(value.substring(0, value.length - 1))) {
      return callback(new Error(error))
    }
    console.log('value3', value2)
  } else if (!regNum.test(value)) {
    return callback(new Error(error))
  }
  callback()
}

// validate whether a number more than zero

const validateNumberGreaterThanZero = (rule, value, callback) => {
  const lan = localStorage.getItem('lan')
  console.log(value)
  try {
    console.log(Number.isInteger(Number(value)) && Number(value) > 0)
    if (!(Number.isInteger(Number(value)) && Number(value) > 0)) {
      const error =
            lan == 'zh'
              ? '请输入大于0的正整数'
              : 'Please enter a integer number greater than 0'
      return callback(new Error(error))
    }
  } catch (error) {
    callback(error)
  }
  callback()
}

export {
  validateMailbox,
  validateFullName,
  validatePassword,
  validateCode,
  validateIdentificationCode,
  validateIndentyTail,
  validateNumberGreaterThanZero
}
