import Instance from './resources/ec2.js'
import Template  from './template/index.js'

const main = async () => {
    const T = new Template();
    T.setDescription('Blah di Dah');
    const map = {
        RegionMap : {
            "us-east-1"      : { "HVM64" : "ami-0ff8a91507f77f867"},
            "us-west-1"      : { "HVM64" : "ami-0bdb828fd58c52235"},
            "eu-west-1"      : { "HVM64" : "ami-047bb4163c506cd98"},
            "ap-southeast-1" : { "HVM64" : "ami-08569b978cc4dfa10"},
            "ap-northeast-1" : { "HVM64" : "ami-06cd52961ce9f0d85"}
          }
    }
    T.setMappings(map)
    const EC2 = new Instance('myInstance');
    const EC3 = new Instance('myInstance2');
    const properties = {
        AdditionalInfo: 'Some',
        Affinity: 'Blah',
        ImageId: "i-jndiasd"
    }
    EC2.setProperties(properties)
    EC3.setProperties(properties)
    EC3.setDepends(EC2)

    T.addResource(EC2)
    T.addResource(EC3)

    // generate
    const finishedTemplate = await T.generateJSON()
    console.log('Template: ', finishedTemplate)

}

main()