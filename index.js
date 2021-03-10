'use strict';

const { Template } = require('./src/template/index');
const iam = require('./src/resources/iam');
const ec2 = require('./src/resources/ec2');
const s3 = require('./src/resources/s3');
const ecr =  require('./src/resources/ecr');
const beanstalk = require('./src/resources/beanstalk');

module.exports.Template = Template
module.exports.iam = iam
module.exports.ec2 = ec2
module.exports.s3 = s3
module.exports.ecr = ecr
module.exports.beanstalk = beanstalk