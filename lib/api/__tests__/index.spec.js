test('测试 生成接口文件字符串 generateApiFileTemplate',()=>{
    let apiList = [
        {name:'testOne',url:'/test/1',notes:'测试接口1',method:'POST'},
        {name:'test2',url:'/test/2',notes:'测试接口2',method:'GET'},
        {name:'test3',url:'/test/3',notes:'测试接口3',method:'get'}
    ]
    let generateApiFileTemplate = require('../template')
    expect(generateApiFileTemplate(apiList)).toBe(`import axios from '@/utils/fetch/index'

// 测试接口1
export const testOne = (data) => {
    return axios.post('/test/1', data)
}

// 测试接口2
export const test2 = (data) => {
    return axios.get('/test/2', data)
}

// 测试接口3
export const test3 = (data) => {
    return axios.get('/test/3', data)
}
`)
})