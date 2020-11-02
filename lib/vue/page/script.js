let importMap = {

}

const generateSearchForm = (searchList) => {
  let map = {}
  searchList.forEach(item => {
    map[item.key || item.target] = item.value
  })

  let searchTemp = JSON.stringify(map,null, 2)

  return searchTemp.replace(/\"NOW\"/g,'this.$utils.getNowData()')
}


const findApiByType = (type,list)=>{
  let item = list.find(i=>i.type===type) || {}
  return item.name || ''

}

const generateInitApi = (apiList)=>{
  let temp = ''
  let listApi = findApiByType('list',apiList)
  let delApi = findApiByType('del',apiList)
  if(listApi){
    temp = temp+ `        this.listApi = api['${listApi}']`
  }
  if(delApi){
    temp = temp+ `\n        this.delApi = api['${delApi}']`
  }

  return temp
}


const generateScriptTemplate = (config) => {
  const name = config.name || 'name'
  const searchList = config.searchList || []
  const apiList = config.api || []
  const formTemp = generateSearchForm(searchList)
  const intApiStr = generateInitApi(apiList)
  return `<script>
import * as api from './api'
import tableMixin from '@/mixins/tableMixin.js'
export default {
    name: '${name}',
    mixins: [tableMixin],
    data() {
        return {
          search:  ${formTemp}
          
        }
      },
    created() {
      this.init()
    }, 
    methods: {
      // 初始化方法
      init() {
        this.initApi()
        this.getDataList()
      },
      initApi() {
${intApiStr}
      }
    }
}
  
</script>
`
}

module.exports = {
  generateScriptTemplate
}

