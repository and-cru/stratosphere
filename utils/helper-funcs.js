export function generateResources (resourceList = []) {
    return resourceList.map(item => {
        return item.createDefinition()
    }).reduce((obj, item) => {
        const key = Object.keys(item)[0]
        return {...obj, [key]: item[key]}
    }, {})
}

export function validateAndSanitise (props, expectedProps) {
    return Object.keys(props).filter(prop => {
        const valid = (Object.keys(expectedProps).includes(prop)) 
        const type = (expectedProps[prop].type.includes(typeof props[prop]))
        
        return valid && type
    })
}