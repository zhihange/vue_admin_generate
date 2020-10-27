const {parseAttrs} = require('../../../utils/index')
const generateTableItem = (data={})=>{
    const attrsStr = parseAttrs(data)
    return `      <zm-table-column ${attrsStr} />`
  
}

const pageTemp =   `
    <zm-page class="mt10" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="page.page" :total="page.total" :page-size="page.limit"
    />`

const generateTableTemplate = (list,isPage = true)=>{
    let tableItems = list.map(generateTableItem).join('\n')
    let temp = `
    <zm-table :data="dataList" class="mt10" v-loading="loading" has-select ref="table">
${tableItems}
    </zm-table>
${isPage?pageTemp:''}     
    
    `
    return temp
}

module.exports = {
    generateTableTemplate
}