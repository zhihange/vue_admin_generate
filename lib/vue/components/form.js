/**
 * 
 * @param label {string} 标签 
 * @param key {string} 搜索字段 
 * @param comp {string} 组件名称
 * @param attrs {object} 组件属性
 */
const generateFormItemTemplate = ({label='',key="",comp="",attrs={}}) =>{
    let attrsStr = Object.keys(attrs).map(currentKey => {
        let val = attrs[currentKey]
        let isString = typeof val === 'string'
        let keyName = (isString ? '' : ':') + currentKey
        return `${keyName}="${val}"`
    }).join(' ')
    let temp = `     
        <el-form-item label="${label}:">
          <${comp} v-model="search.${key}" ${attrsStr} />
        </el-form-item>`

    return temp

}



const generateFormTemplate = (formList)=>{
    return formList.map(item=>generateFormItemTemplate(item)).join('')
}



module.exports = {
    generateFormTemplate
}