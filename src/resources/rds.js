'use strict';

const { Resource } = require('../utils/resource')
const config = require('../helpers/config');

class DBCluster extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBCluster')
        this.name = name
        this.expectedConfig = config.rds.DBCluster
    }
}

class DBClusterParameterGroup extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBClusterParameterGroup')
        this.name = name
        this.expectedConfig = config.rds.DBClusterParameterGroup
    }
}

class DBInstance extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBInstance')
        this.name = name
        this.expectedConfig = config.rds.DBInstance
    }
}

class DBParameterGroup extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBParameterGroup')
        this.name = name
        this.expectedConfig = config.rds.DBParameterGroup
    }
}

class DBProxy extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBProxy')
        this.name = name
        this.expectedConfig = config.rds.DBProxy
    }
}

class DBProxyTargetGroup extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBProxyTargetGroup')
        this.name = name
        this.expectedConfig = config.rds.DBProxyTargetGroup
    }
}

class DBSecurityGroup extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBSecurityGroup')
        this.name = name
        this.expectedConfig = config.rds.DBSecurityGroup
    }
}

class DBSecurityGroupIngress extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBSecurityGroupIngress')
        this.name = name
        this.expectedConfig = config.rds.DBSecurityGroupIngress
    }
}

class DBSubnetGroup extends Resource {
    constructor (name = '') {
        super('AWS::RDS::DBSubnetGroup')
        this.name = name
        this.expectedConfig = config.rds.DBSubnetGroup
    }
}

class EventSubscription extends Resource {
    constructor (name = '') {
        super('AWS::RDS::EventSubscription')
        this.name = name
        this.expectedConfig = config.rds.EventSubscription
    }
}

class GlobalCluster extends Resource {
    constructor (name = '') {
        super('AWS::RDS::GlobalCluster')
        this.name = name
        this.expectedConfig = config.rds.GlobalCluster
    }
}

class OptionGroup extends Resource {
    constructor (name = '') {
        super('AWS::RDS::OptionGroup')
        this.name = name
        this.expectedConfig = config.rds.OptionGroup
    }
}

module.exports.DBCluster = DBCluster
module.exports.DBClusterParameterGroup = DBClusterParameterGroup
module.exports.DBInstance = DBInstance
module.exports.DBParameterGroup = DBParameterGroup
module.exports.DBProxy = DBProxy
module.exports.DBProxyTargetGroup = DBProxyTargetGroup
module.exports.DBSecurityGroup = DBSecurityGroup
module.exports.DBSecurityGroupIngress = DBSecurityGroupIngress
module.exports.DBSubnetGroup = DBSubnetGroup
module.exports.EventSubscription = EventSubscription
module.exports.GlobalCluster = GlobalCluster
module.exports.OptionGroup = OptionGroup