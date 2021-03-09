'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config');

class PublicRepository extends Resource {
    constructor (name = '') {
        super('AWS::ECR::PublicRepository')
        this.name = name
        this.expectedConfig = config.ecr.PublicRepository
    }
}


class RegistryPolicy extends Resource {
    constructor (name = '') {
        super('AWS::ECR::RegistryPolicy')
        this.name = name
        this.expectedConfig = config.ecr.RegistryPolicy
    }
}

class ReplicationConfiguration extends Resource {
    constructor (name = '') {
        super('AWS::ECR::ReplicationConfiguration')
        this.name = name
        this.expectedConfig = config.ecr.ReplicationConfiguration
    }
}

class Repository extends Resource {
    constructor (name = '') {
        super('AWS::ECR::Repository')
        this.name = name
        this.expectedConfig = config.ecr.Repository
    }
}

module.exports.PublicRepository = PublicRepository
module.exports.RegistryPolicy = RegistryPolicy
module.exports.ReplicationConfiguration = ReplicationConfiguration
module.exports.Repository = Repository