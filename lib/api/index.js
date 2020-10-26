let generateApiFileTemplate = require('./template')
let path = require('path')
let fs = require('fs/promises')
const API_FOLDER = './api'
const FILE_NAME = './index.js'
const generateApiFile = (targetFolder,apiList=[])=>{
    if(apiList instanceof Array && apiList.length){
       let template = generateApiFileTemplate(apiList)
       let apiFolder = path.resolve(targetFolder,API_FOLDER )
       let apiFile =  path.resolve(apiFolder,FILE_NAME )
       fs.mkdir(apiFolder).then(()=>{
           console.log(`创建api文件夹  ${apiFolder}` )
           fs.writeFile(apiFile,template).then(()=>{
            console.log(`创建api文件  ${apiFile}` )
           })
       })

    }
}

module.exports = {
    generateApiFile
}