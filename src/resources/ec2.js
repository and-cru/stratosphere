'use strict'

const { Resource } = require('../utils/resource' );
const config = require('../helpers/config'); 

class Instance extends Resource {
    constructor (name = '') {
        super('AWS::EC2::Instance')
        this.name = name
    }

    // Set Depends On
    setDepends (resource) {
        this.dependsOn = resource.name
    }

    // Convert to Obj
    createDefinition () {
        let defintion = {}
        const props = this.validateProps(config.ec2.Instance)

        if (props !== Error && !this.dependsOn) {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.ec2.Instance)
            } 
        } else {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.ec2.Instance),
                DependsOn: this.dependsOn
            } 
        }
        
        return defintion
    }
}

module.exports.Instance = Instance