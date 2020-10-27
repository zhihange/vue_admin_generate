module.exports.parseAttrs = (attrs={})=>{
    let attrsStr = Object.keys(attrs).map(currentKey => {
        let val = attrs[currentKey]
        let isString = typeof val === 'string'
        let keyName = (isString ? '' : ':') + currentKey
        return `${keyName}="${val}"`
    }).join(' ')
    return attrsStr

}

