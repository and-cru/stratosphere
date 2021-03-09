'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config')

class AccessPoint extends Resource {
    constructor (name = '') {
        super('AWS::S3::AccessPoint')
        this.name = name
        this.expectedConfig = config.s3.AccessPoint
    }
}

class Bucket extends Resoource {
    constructor (name = '') {
        super('AWS::S3::Bucket')
        this.name = name
        this.expectedConfig = config.s3.Bucket
    }
}

class BucketPolicy extends Resource {
    constructor (name = '') {
        super('AWS::S3::BucketPolicy')
        this.name = name
        this.expectedConfig = config.s3.BucketPolicy
    }
}

class StorageLens extends Resource {
    constructor (name = '') {
        super('AWS::S3::StorageLens')
        this.name = name
        this.expectedConfig = config.s3.StorageLens
    }
}

module.exports.AccessPoint = AccessPoint
module.exports.Bucket = Bucket
module.exports.BucketPolicy = BucketPolicy
module.exports.StorageLens = StorageLens