export default {    
    ec2Instance: {
        AdditionalInfo: {
            type: ['string'],
            required: false
        },
        Affinity: {
            type: ['string'],
            required: false
        },
        AvailabilityZone: {
            type: ['string'],
            required: false
        },
        ImageId: {
            type: ['object', 'string'],
            required: true
        }
    }
}