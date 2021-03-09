import Instance from './resources/ec2.js'
import Role from './resources/iam.js'
import Template  from './template/index.js'

const main = async () => {
    const T = new Template('yaml');
    T.setFileLocation('/Users/pedreviljoen/Desktop')
    T.setName('blah')
    T.setDescription('Testing IAM role')

    const role = new Role('SampleTest')
    const properties = {}

    role.setProperties(properties)
    T.addResource(role)
    // generate
    const finishedTemplate = await T.generateTemplate()
    console.log('Template: ', finishedTemplate)
}

main()