'use strict'

const { Resource } = require('../utils/resource' );
const config = require('../helpers/config'); 

class Application extends Resource {
    constructor (name = '') {
        super('AWS::ElasticBeanstalk::Application')
        this.name = name
        this.expectedConfig = config.beanstalk.Application
    }
}

class ApplicationVersion extends Resource {
    constructor (name = '') {
        super('AWS::ElasticBeanstalk::ApplicationVersion')
        this.name = name
        this.expectedConfig = config.beanstalk.ApplicationVersion
    }
}

class ConfigurationTemplate extends Resource {
    constructor (name = '') {
        super('AWS::ElasticBeanstalk::ConfigurationTemplate')
        this.name = name
        this.expectedConfig = config.beanstalk.ConfigurationTemplate
    }
}

class Environment extends Resource {
    constructor (name = '') {
        super('AWS::ElasticBeanstalk::Environment')
        this.name = name
        this.expectedConfig = config.beanstalk.Environment
    }
}

module.exports.Application = Application
module.exports.ApplicationVersion = ApplicationVersion
module.exports.ConfigurationTemplate = ConfigurationTemplate
module.exports.Environment = Environment