
const path = require('path')
const fs = require('fs/promises')
const FILE_NAME = './index.vue'
const {generateFormTemplate} = require('../components/form')
const {generateBtnTemplate} = require('./template/groupBtn')
const {generateMainTemplate} = require('./template/index')

const generateVueFile = (targetFolder,{searchList=[],groupBtn=[]}) =>{
   let searchFromStr = generateFormTemplate(searchList)
   if(searchList.length){
    groupBtn.unshift('search')
   }
   let btnTemplate = generateBtnTemplate(groupBtn)
   let mainTemplate = generateMainTemplate(searchFromStr,btnTemplate)
   console.log(mainTemplate)
   let vueFilePath = path.resolve(targetFolder,FILE_NAME )
   fs.writeFile(vueFilePath,mainTemplate).then(res=>{
       console.log(`创建vue 文件 ${vueFilePath}`)
   })
}



module.exports = {
    generateVueFile
}