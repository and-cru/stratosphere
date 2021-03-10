# Stratosphere

> A simplified NodeJS perspective for generating CloudFormation templates

<div align="center" style="padding-top: 20px;  padding-bottom: 20px;">
	<img src="assets/stratosphere.png" alt="Item" height="450px">
</div>

## Why Stratosphere

The stratosphere is a region of the Earth's atmosphere, from 20km to 50km from the Earth, and contains the important Ozone layer which provides important protection from UV. Stratosphere aims to provide similar protection with creating Infrastructure as Code, by abstracting complexity incorporating validation.

Stratosphere is a simple package which allows you to generate [CloudFormation](https://aws.amazon.com/cloudformation/) templates, no frills just simple. Create and construct templates with the same `NodeJS` object feel.

### Usage

#### Install

```bash
npm install stratosphere
```

#### Example

```javascript
const { Template, iam } = require('stratosphere')

const main = async () => {
    const T = new Template('json');
    T.setFileLocation('/Users/local/Desktop')
    T.setName('template')
    T.setDescription('Testing IAM role')

    const role = new iam.Role('SampleRole')
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
        RoleName: 'myRole'
    }

    role.setProperties(properties)
    T.addResource(role)
    // generate - this will return the template in the specified format
    const finishedTemplate = await T.generateTemplate()
}
```

#### API reference for Template and Resources

### Resources supported

From the [CloudFormation resource reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html), the below resources are supported:

- [IAM](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_IAM.html)
- [S3](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_S3.html)
- [ECR](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_ECR.html)

For a summarised view of what is planned and currently in progress, head over to our [Roadmap](https://github.com/and-cru/stratosphere/projects/1)

## Future of Stratosphere

This package is for the developer community, with an aim to help simplify the development workflow, and the future of this package will be impacted by the community. Please see the [Roadmap](https://github.com/and-cru/stratosphere/projects/1) for features planned, we are working on a Contributing guide.

Experiencing an issue or reporting a bug, please follow the [Bug Report](./.github/ISSUE_TEMPLATE/bug_report.md) guide.

Have an awesome feature in mind, please submit a [Feature Request](./.github/ISSUE_TEMPLATE/feature_request.md), we will look to build this into Stratosphere.