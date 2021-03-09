import Resource from '../utils/resource.js'
import config from '../helpers/iam-config.js'

export default class Role extends Resource {
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
        const props = this.validateProps(config.iamRole)

        if (props !== Error && !this.dependsOn) {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.iamRole)
            } 
        } else {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.validateProps(config.iamRole),
                DependsOn: this.dependsOn
            } 
        }
        
        return defintion
    }
}