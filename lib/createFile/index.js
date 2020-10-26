const path = require('path')
const fs = require('fs/promises')
const {generateApiFile} = require('../api/index')
const {generateVueFile} = require('../vue/index')
module.exports.create = async function (filePath) {
    let targetFolder = path.resolve(filePath)
    const configData = await getConfigData(targetFolder)
    //generateApiFile(targetFolder,configData.api)
    generateVueFile(targetFolder,configData)
}


//获取配置文件数据
const getConfigData  = (targetFolder)=>{
    const configFileName = './__gocde__.js'
    let configPath = path.resolve(targetFolder,configFileName)
    return fs.access(configPath).then(res=>{
       let configData = require(configPath)
       return configData 
    }).catch(err=>{
        console.log('/__gocde__.js 文件不存在')
    })
}