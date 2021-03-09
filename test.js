'use strict'

const { Template, iam } = require('./index')

const main = async () => {
    const T = new Template('json');
    T.setFileLocation('/Users/pedreviljoen/Desktop')
    T.setName('blah')
    T.setDescription('Testing IAM role')

    const role = new iam.Role('SampleTest')
    const properties = {
        AssumeRolePolicyDocument: {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "Service": [
                            "ec2.amazonaws.com"
                        ]
                    },
                    "Action": [
                        "sts:AssumeRole"
                    ]
                }
            ]
        },
        Path: "/",
        Policies: [
            {
                "PolicyName": "root",
                "PolicyDocument": {
                    "Version": "2012-10-17",
                    "Statement": [
                        {
                            "Effect": "Allow",
                            "Action": "*",
                            "Resource": "*"
                        }
                    ]
                }
            }
        ],
        RoleName: 'jdnfowq'
    }

    role.setProperties(properties)
    T.addResource(role)
    // generate
    const finishedTemplate = await T.generateTemplate()
    console.log('Template: ', finishedTemplate)
}

main()