'use strict'

const { Resource } = require('../utils/resource' );
const config = require('../helpers/config'); 

class Instance extends Resource {
    constructor (name = '') {
        super('AWS::EC2::Instance')
        this.name = name
        this.expectedConfig = config.ec2.Instance
    }
}

module.exports.Instance = Instance