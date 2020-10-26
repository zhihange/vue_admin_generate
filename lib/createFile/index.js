let path = require('path')
let fs = require('fs/promises')
let {generateApiFile} = require('../api/index')
module.exports.create = async function (filePath) {
    let targetFolder = path.resolve(filePath)
    const configData = await getConfigData(targetFolder)
    generateApiFile(targetFolder,configData.api)
   

}


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