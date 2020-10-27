

const generateMainTemplate = ({searchFromTemplate , btnTemplate ,tableTemplate })=>{
    let template = `
<template>
  <zm-app-content>
    <div class="topSearch">
      <el-form :inline="true">
${searchFromTemplate}
${btnTemplate}            
      </el-form>
    </div>
${tableTemplate}
  </zm-app-content>
</template>
`

return template
   
}




module.exports = {
    generateMainTemplate
}