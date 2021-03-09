import fs from 'fs'
import yaml from 'js-yaml'
import { generateResources } from '../utils/helper-funcs.js'
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
    async generateJSON (writeToFile = '') {
        try {
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
            const resources = generateResources(this.resources)
            
            // Structure template
            newTemplate  = {
                ...newTemplate,
                Resources: resources
            }
    
            // Generate JSON of the template
            const data = JSON.stringify(newTemplate, null, 4)
            
            if (writeToFile) {
                await fs.writeFileSync(writeToFile, data)
            }

            return newTemplate
        } catch (err) {
            console.error(err)
        }
    }

    generateYAMl() {

    }
}