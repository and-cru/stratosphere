# Stratosphere

> A simplified NodeJS perspective for generating CloudFormation templates

<div align="center" style="padding-top: 20px;  padding-bottom: 20px;">
	<img src="assets/stratosphere.png" alt="Item" height="450px">
</div>

## Why Stratosphere

The stratosphere is a region of the Earth's atmosphere, from 20km to 50km from the Earth, and contains the important Ozone layer which provides important protection from UV. Stratosphere aims to provide similar protection with creating Infrastructure as Code, by abstracting complexity & incorporating validation.

Stratosphere is a simple package which allows you to generate [CloudFormation](https://aws.amazon.com/cloudformation/) templates, no frills just simple. Create and construct templates with the same `NodeJS` object feel.

### Usage

#### Install

With NPM

```bash
npm install @stratosphere/cloudformer
```

Or Yarn

```
yarn add @stratosphere/cloudformer
```

#### Reference guide for Template and Resources

> Template

```javascript
const { Template, iam } = require('@stratosphere/cloudformer')

// Initialize a new Template with JSON file format. Valid file format values are JSON and YAML
const T = new Template('json')

// Set optional output file location
T.setFileLocation('/Users/local/Desktop')

// Set the name of the template file at the output file location
T.setName('myTemplate')

// Set optional description for template - expected type is String
T.setDescription('Example template')

// Add Mappings to template - expected type is Object
const mappingsObj = {}
T.setMappings(mappingsObj)


// Add a resource to the Template - Expected type is Resource
const newRole = iam.Role('myRole')
T.addResouce(newRole)

// Generate template. If file location specified this will write the generate template output to the file location
const completedTemplate = await T.generateTemplate()
```

> Resource

```javascript
const { iam } = require('@stratosphere/cloudformer')

// Initialize a new IAM role with a resource name - Expected type for name is String
const newRole = new iam.Role('myRole')

// Create the properties object for the IAM role - Expected type here is an Object of properties
// Underneath the supplied properties are validated according to specification for expected properties, property type and required properties
const properties = {
        AssumeRolePolicyDocument: {
            Version: "2012-10-17",
            Statement: [
                {
                    Effect: "Allow",
                    Principal: {
                        Service: [
                            "ec2.amazonaws.com"
                        ]
                    },
                    Action: [
                        "sts:AssumeRole"
                    ]
                }
            ]
        },
        Path: "/",
        Policies: [
            {
                PolicyName: "root",
                PolicyDocument: {
                    Version: "2012-10-17",
                    Statement: [
                        {
                            "Effect": "Allow",
                            "Action": "*",
                            "Resource": "*"
                        }
                    ]
                }
            }
        ],
        RoleName: "my-example-role"
    }

// Set properties of the IAM role resource
newRole.setProperties(properties)
```

#### Example

> An example to Create a S3 bucket

```javascript
const { Template, s3 } = require('@stratosphere/cloudformer')

const main = async () => {
    const T = new Template('yaml');
    T.setFileLocation('/Users/local/Desktop')
    T.setName('myBucketTemplate')

    const myBucket = new s3.Bucket('MyBucket')
    const properties = {
        VersioningConfiguration: {
            Status: "Enabled"
        },
        BucketName: "my-sample-test-bucket"
    }

    myBucket.setProperties(properties)
    T.addResource(myBucket)
    // generate - this will return the template in the specified format
    const finishedTemplate = await T.generateTemplate()
}
```

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