const {parseAttrs} = require('../../utils/index')
/**
 * 
 * @param label {string} 标签 
 * @param key {string} 搜索字段 
 * @param comp {string} 组件名称
 * @param attrs {object} 组件属性
 */
const generateFormItemTemplate = ({label='',key="",comp="",target="", attrs={}}) =>{

    key&&(attrs['v-model'] = 'search.'+key)
    target&&(attrs[':target'] = 'search.'+target)

    let attrsStr = parseAttrs(attrs)
    
    let temp = `     
        <el-form-item label="${label}:">
          <${comp} ${attrsStr} />
        </el-form-item>`

    return temp

}



const generateFormTemplate = (formList)=>{
    return formList.map(generateFormItemTemplate).join('')
}



module.exports = {
    generateFormTemplate
}