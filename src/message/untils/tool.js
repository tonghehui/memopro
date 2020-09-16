// 将url参数 转换为
const getUrlParams = search => {
    const queryString = (search && search.split("?")[1]) || location.search.split("?")[1] || "";
    const queryList = queryString.split("&");
    let result = {};
    let href = location.href;
    queryString && queryList.map(item => {
            let keyValue = item.split("=");
            result[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });

    
    return result;
};
export{
    getUrlParams
}