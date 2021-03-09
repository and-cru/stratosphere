import { Instance } from './resources/ec2.js'
import { Role } from './resources/iam.js'
import Template  from './template/index.js'

const main = async () => {
    const T = new Template('yaml');
    T.setFileLocation('/Users/pedreviljoen/Desktop')
    T.setName('blah')
    T.setDescription('Testing IAM role')

    const role = new Role('SampleTest')
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