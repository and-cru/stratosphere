import { validateAndSanitise, extractRequiredProps, checkForRequiredProps } from '../utils/helper-funcs.js'
const SANITISED_MESSAGE='Could not validate properties, please check if the provided properties are valid and if a required property is missing'
export default class Resource {
    constructor (type = '') {
        this.type = type
    }

    setProperties (properties = {}) {
        this.properties = properties
    }

    validateProps(expectedProperties = {}) {
        let newProps = {}
        // Check for type valid and required fields
        const validSanitisedProps = validateAndSanitise(this.properties, expectedProperties)
        const requiredProps = extractRequiredProps(expectedProperties)
        const isValidAndRequired = checkForRequiredProps(validSanitisedProps, requiredProps)

        // Build up new props object if valid, sanitised and required met
        if (isValidAndRequired) {
            validSanitisedProps.map(prop => {
                return newProps[prop] = this.properties[prop]
            })
        }

        return newProps
    }
}