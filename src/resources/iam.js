'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config');

class Role extends Resource {
    constructor (name = '') {
        super('AWS::IAM::Role')
        this.name = name
        this.expectedConfig = config.iam.Role
    }
}

module.exports.Role = Role