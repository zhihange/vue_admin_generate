const btnList = {
    'search' : 't="search" @click="onSearch"',
    'add': 't="add" @click="handleForm(true)"'
}

const generateBtnItem = (key)=>{
    let item = btnList[key]
    if(item){
        return `          <zm-button ${item} />`
    }
    return `          <zm-button>${key}</zm-button>` 
}


const generateBtnTemplate = (btnList)=>{
    let btnStr = btnList.map(item=>generateBtnItem(item)).join('\n')
    let temp = 
`        <el-form-item>
${btnStr}
        </el-form-item>`
  
    return temp
}

module.exports = {
    generateBtnTemplate
}