

const generateMainTemplate = (formStr , groupBtnStr)=>{
    let template = `
<template>
  <zm-app-content>
    <div class="topSearch">
      <el-form :inline="true">
${formStr}
${groupBtnStr}            
      </el-form>
  
    </div>
  </zm-app-content>
</template>
`

return template
   
}




module.exports = {
    generateMainTemplate
}