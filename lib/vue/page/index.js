
const path = require('path')
const fs = require('fs/promises')
const FILE_NAME = './index.vue'
const { generateFormTemplate } = require('../components/form')
const { generateBtnTemplate } = require('./template/groupBtn')
const { generateTableTemplate} = require('./template/table')
const { generateMainTemplate } = require('./template/index')

const generateVueFile = (targetFolder, { searchList = [], groupBtn = [] , table=[]}) => {
    let searchFromTemplate = generateFormTemplate(searchList) //搜索表单
    if (searchList.length) {
        groupBtn.unshift('search')
    }
    let btnTemplate = generateBtnTemplate(groupBtn) //按钮组
    let tableTemplate = generateTableTemplate(table) //表单
    let mainTemplate = generateMainTemplate({
        searchFromTemplate,
        btnTemplate,
        tableTemplate
    })
    console.log(mainTemplate)
    let vueFilePath = path.resolve(targetFolder, FILE_NAME)
    fs.writeFile(vueFilePath, mainTemplate).then(res => {
        console.log(`创建vue 文件 ${vueFilePath}`)
    })
}



module.exports = {
    generateVueFile
}