'use strict'
const { validateAndSanitise, extractRequiredProps, checkForRequiredProps } = require('../utils/helper-funcs'); 
const SANITISED_MESSAGE='Could not validate properties, please check if the provided properties are valid and if a required property is missing'

class Resource {
    constructor (type = '') {
        this.type = type
    }

    setProperties (properties = {}) {
        this.properties = properties
    }

    // Set Depends On
    setDepends (resource) {
        this.dependsOn = resource.name
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

    // Convert to Obj
    createDefinition () {
        let defintion = {}
        const props = this.validateProps(this.expectedConfig)

        if (props !== Error && !this.dependsOn) {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(this.expectedConfig)
            } 
        } else {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(this.expectedConfig),
                DependsOn: this.dependsOn
            } 
        }
        
        return defintion
    }
}

module.exports = {
    Resource
}