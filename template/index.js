export default class Template {
    constructor() {
        this.resources = []
        this.formatVersion = '2010-09-09'
    }

    // Method to add a resource to the template
    addResource (resource) {
        this.resources.push(resource)
    }

    // set some common variables - for now Description and Mappings
    setDescription (description = '') {
        this.description = description;
    }

    setMappings (mappings = {}) {
        this.mappings = mappings;
    }

    // 
    generateJSON () {
        let newTemplate = {
            AWSTemplateFormatVersion: this.formatVersion,
        }

        // add conditional elements
        if (this.description) {
            newTemplate = {
                ...newTemplate,
                Description: this.description
            }
        }

        if (this.mappings) {
            newTemplate = {
                ...newTemplate,
                Mappings: this.mappings
            }
        }

        // Map over resources and call createDefinition method
        const items = this.resources.map(item => {
            return item.createDefinition()
        }).reduce((obj, item) => {
            const key = Object.keys(item)[0]
            return {...obj, [key]: item[key]}
        }, {})
        
        // Structure template
        newTemplate  = {
            ...newTemplate,
            Resources: items
        }

        console.log('New Template', newTemplate)
        // Generate JSON of the template
    }

    generateYAMl() {

    }
}