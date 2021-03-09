'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config')

class Role extends Resource {
    constructor (name = '') {
        super('AWS::IAM::Role')
        this.name = name
    }

    // Set Depends On
    setDepends (resource) {
        this.dependsOn = resource.name
    }

    // Convert to Obj
    createDefinition () {
        let defintion = {}
        const props = this.validateProps(config.iam.Role)

        if (props !== Error && !this.dependsOn) {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.iam.Role)
            } 
        } else {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.iam.Role),
                DependsOn: this.dependsOn
            } 
        }
        
        return defintion
    }
}

module.exports = {
    Role
}