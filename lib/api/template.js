const template = `import axios from '@/utils/fetch/index'
`
/** 
 * @description 生成接口的每一项
 * @param notes {string} 注释
 * @param name {string} 接口名
 * @param url {string} 接口地址
 * @param method {string} 请求方式
 * @returns {string} 接口的模版的每项
*/
const generateApiItem = ({ notes, name, url ,method="post" }) => {
    method = method.toLowerCase()
    return `
// ${notes}
export const ${name} = (data) => {
    return axios.${method}('${url}', data)
}
`
}


/**
 * @description 生成接口文件字符串
 * @param apiList {array} 
*/
const generateApiFileTemplate = (apiList=[]) => {
    let apiStr = apiList.map(item=>generateApiItem(item)).join('')
    return template + apiStr
}

module.exports = generateApiFileTemplate