import Resource from '../utils/resource.js'
import config from '../helpers/config.js'

export default class Instance extends Resource {
    constructor (name = '') {
        super('AWS::EC2::Instance')
        this.name = name
    }

    // Convert to Obj
    createDefinition () {
        let defintion = {}
        const props = this.sanitiseProperties(config.ec2Instance)

        if (props !== Error) {
            defintion[this.name] = {
                Type: this.type,
                Properties: this.sanitiseProperties(config.ec2Instance)
            } 
        }
        
        return defintion
    }
}