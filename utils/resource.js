import _ from 'lodash/array.js'
import { validateAndSanitise } from '../utils/helper-funcs.js'
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
        const requiredProps = Object.keys(expectedProperties).filter(prop => {
            return expectedProperties[prop].required
        })
        const isValidAndSanitsed = (validSanitisedProps.length > 0) &&
            (_.difference(requiredProps, validSanitisedProps).length === 0)

        // Build up new props object if valid, sanitised and required met
        if (isValidAndSanitsed) {
            validSanitisedProps.map(prop => {
                return newProps[prop] = this.properties[prop]
            })
        }

        return isValidAndSanitsed ? newProps : new Error(SANITISED_MESSAGE)
    }
}