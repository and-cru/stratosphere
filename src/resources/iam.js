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

class AccessKey extends Resource {
    constructor (name = '') {
        super('AWS::IAM::AccessKey')
        this.name = name
        this.expectedConfig = config.iam.AccessKey
    }
}

class Group extends Resource {
    constructor (name = '') {
        super('AWS::IAM::Group')
        this.name = name
        this.expectedConfig = config.iam.Group
    }
}

class InstanceProfile extends Resource {
    constructor (name = '') {
        super('AWS::IAM::InstanceProfile')
        this.name = name
        this.expectedConfig = config.iam.InstanceProfile
    }
}

class ManagedPolicy extends Resource {
    constructor (name = '') {
        super('AWS::IAM::ManagedPolicy')
        this.name = name
        this.expectedConfig = config.iam.ManagedPolicy
    }
}

class OIDCProvider extends Resource {
    constructor (name = '') {
        super('AWS::IAM::OIDCProvider')
        this.name = name
        this.expectedConfig = config.iam.OIDCProvider
    }
}

class Policy extends Resource {
    constructor (name = '') {
        super('AWS::IAM::Policy')
        this.name = name
        this.expectedConfig = config.iam.Policy
    }
}

class User extends Resource {
    constructor (name = '') {
        super('AWS::IAM::User')
        this.name = name
        this.expectedConfig = config.iam.User
    }
}

class UserToGroupAddition extends Resource {
    constructor (name = '') {
        super('AWS::IAM::UserToGroupAddition')
        this.name = name
        this.expectedConfig = config.iam.UserToGroupAddition
    }
}

class VirtualMFADevice extends Resource {
    constructor (name = '') {
        super('AWS::IAM::VirtualMFADevice')
        this.name = name
        this.expectedConfig = config.iam.VirtualMFADevice
    }
}

module.exports.Role = Role
module.exports.AccessKey = AccessKey
module.exports.Group = Group
module.exports.InstanceProfile = InstanceProfile
module.exports.ManagedPolicy = ManagedPolicy
module.exports.OIDCProvider = OIDCProvider
module.exports.Policy = Policy
module.exports.User = User
module.exports.UserToGroupAddition = UserToGroupAddition
module.exports.VirtualMFADevice = VirtualMFADevice