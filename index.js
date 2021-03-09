'use strict';

const { Template } = require('./src/template/index');
const iam = require('./src/resources/iam');
const ec2 = require('./src/resources/ec2');

module.exports.Template = Template
module.exports.iam = iam
module.exports.ec2 = ec2