'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config')

class AccessPoint extends Resource {
    constructor (name = '') {
        super('AWS::S3::AccessPoint')
        this.name = name
        this.expectedConfig = config.ec2.Instance
    }
}

class Bucket extends Resoource {
    constructor (name = '') {
        super('AWS::S3::Bucket')
        this.name = name
        this.expectedConfig = config.ec2.Instance
    }
}

module.exports.AccessPoint = AccessPoint
module.exports.Bucket = Bucket