// 将url参数 转换为
const getUrlParams = search => {
    const queryString = (search && search.split('?')[1]) || location.search.split('?')[1] || ''
    const queryList = queryString.split('&')
    const result = {}
    const href = location.href
    queryString && queryList.map(item => {
        const keyValue = item.split('=')
        result[keyValue[0]] = decodeURIComponent(keyValue[1])
    })

    return result
}
/*

*/
const getUrl = (path = '') => {
    const host = window.location.host
    const url = window.location.href.substr(0, 5)
    let prefix = ''
    if (url === 'https') {
        prefix = url + '://'
    } else if (url === 'http:') {
        prefix = url + '//'
    }

    return prefix + host + path
}
/*
    请求接口返回error。msg 国际化
*/
const getErrorMsg = (msg, lan) => {
    let message = ''
    if (lan === 'en') {
        switch (msg) {
        case '请求超时，请检查网络': message = 'Request timeout，please check the network'; break
        case '请求失败，请稍后重试': message = 'The request failed， Please try again later'; break
        case '无此用户，请先注册': message = 'No such user, please register first'; break
        case '用户名或密码不正确': message = 'Incorrect user name or password'; break

        default:
            break
        }
        return message
    } else {
        message = msg
        return message
    }
}

export {
    getUrlParams,
    getUrl,
    getErrorMsg
}
