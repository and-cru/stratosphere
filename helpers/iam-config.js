export default {    
    iamRole: {
        AssumeRolePolicyDocument: {
            type: ['object'],
            required: true
        },
        Description: {
            type: ['string'],
            required: false
        },
        ManagedPolicyArns: {
            type: ['object'],
            required: false
        },
        MaxSessionDuration: {
            type: ['number'],
            required: false
        },
        Path: {
            type: ['string'],
            required: false
        },
        PermissionsBoundary: {
            type: ['string'],
            required: false
        },
        Policies: {
            type: ['object'],
            required: false
        },
        RoleName: {
            type: ['string'],
            required: true
        },
        Tags: {
            type: ['object'],
            required: false
        }
    }
}