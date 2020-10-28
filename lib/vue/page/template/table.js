const { parseAttrs } = require('../../../utils/index')
const generateTableItem = (data = {}) => {
    const attrsStr = parseAttrs(data)
    return `      <zm-table-column ${attrsStr} />`

}

const pageTemp = `
    <zm-page class="mt10" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="page.page" :total="page.total" :page-size="page.limit"
    />`

const generateOptsBtnItem = (item) => {
    let map = {
        edit: { text: '编辑', params: ['id'] },
        del: { text: '编辑', params: ['name', 'id'] }
    }
    let currentItem = typeof item === 'string' ? { type: item } : item
    let type = currentItem.type || 'edit'
    let defConf = map[type] || { text: item, type: 'edit' }
    let relConf = { ...defConf, ...currentItem }
    let { params = [] } = relConf
    let btnAttrs = {
        type: 'text'
    }
    if (type === 'edit') {
        btnAttrs['@click'] = `handleForm(false,scope.row,'${params[0] || 'id'}')`
    } else if (type === 'del') {
        btnAttrs.class = "red"
        btnAttrs['@click'] = `handleDel(scope.row,'${params[0] || 'name'}','${params[1] || 'id'}')`
    }

    let attrStr = parseAttrs(btnAttrs)
    return `          <zm-button ${attrStr} >${relConf.text}</zm-button>`
}

const generateOptsBtn = ({ label = "操作", attrs = {}, btns = [] }) => {
    const attrsStr = parseAttrs({ label, ...attrs })
    const btnTemp = btns.map(generateOptsBtnItem).join('\n')

    return `
      <zm-table-column ${attrsStr} >
        <template slot-scope="scope">
${btnTemp}
        </template>
      </zm-table-column>
`

}



const generateTableTemplate = (list, isPage = true) => {
    let propList = list.filter(i => i.prop !== undefined)
    let optsItem = list.find(i => i.prop === undefined)
    let tableItems = propList.map(generateTableItem).join('\n')
    let btnTemp = generateOptsBtn(optsItem)
    let temp = `
    <zm-table :data="dataList" class="mt10" v-loading="loading" has-select ref="table">
${tableItems}
${btnTemp}
    </zm-table>
${isPage ? pageTemp : ''}     
    
`
    return temp
}

module.exports = {
    generateTableTemplate
}