'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config')

class AccessPoint extends Resource {
    constructor (name = '') {
        super('AWS::EC2::Instance')
        this.name = name
        this.expectedConfig = config.ec2.Instance
    }
}

module.exports.AccessPoint = AccessPoint