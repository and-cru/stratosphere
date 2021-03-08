import Instance from './resources/ec2.js'
import Template  from './template/index.js'

const main = () => {
    const T = new Template();
    const EC2 = new Instance('myInstance');
    const EC3 = new Instance('myInstance2')
    const properties = {
        AdditionalInfo: 'Some',
        Affinity: 'Blah',
        ImageId: 'adnfow'
    }
    EC2.setProperties(properties)
    EC3.setProperties(properties)

    T.addResource(EC2)
    T.addResource(EC3)

    // generate
    T.generateJSON()
}

main()