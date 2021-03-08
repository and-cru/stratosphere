const SANITISED_MESSAGE='Could not sanitise properties, please check if the provided properties are valid'
export default class Resource {
    constructor (type = '') {
        this.type = type
    }

    setProperties (properties = {}) {
        this.properties = properties
    }

    sanitiseProperties(expectedProperties = {}) {
        let newProps = {}
        // Check for type valid and required fields
        const sanitisedProps = Object.keys(this.properties).filter(prop => {
            // console.log('Prop: ', prop)
            const valid = (Object.keys(expectedProperties).includes(prop)) 
            const type = (typeof this.properties[prop] === expectedProperties[prop].type)
            const required = (!expectedProperties[prop].required)
            

            // console.log('Valid: ', valid)
            // console.log('Type: ', valid)
            // console.log('Required: ', valid)

            return valid && type || required
        })

        console.log('Sanitised: ', sanitisedProps)

        if (sanitisedProps.length > 0) {
            sanitisedProps.map(prop => {
                return newProps[prop] = this.properties[prop]
            })
        }

        console.log('New Props: ', newProps)

        return sanitisedProps.length > 0 ? newProps : new Error(SANITISED_MESSAGE)
    }
}