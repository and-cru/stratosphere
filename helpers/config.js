export default {    
    ec2Instance: {
        AdditionalInfo: {
            type: 'String',
            required: false
        },
        Affinity: {
            type: 'String',
            required: false
        },
        AvailabilityZone: {
            type: 'String',
            required: false
        },
        ImageId: {
            type: 'String',
            required: true
        }
    }
}