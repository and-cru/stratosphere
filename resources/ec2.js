import Resource from '../utils/resource.js'
import config from '../helpers/config.js'

export default class Instance extends Resource {
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
        const props = this.validateProps(config.ec2Instance)

        if (props !== Error && !this.dependsOn) {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.ec2Instance)
            } 
        } else {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.ec2Instance),
                DependsOn: this.dependsOn
            } 
        }
        
        return defintion
    }
}