module.exports = {    
    ec2: {
        Instance: {
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
    },
    iam: {
        Role: {
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
    },
    s3: {
        AccessPoint: {
            Bucket: {
                type: ['string'],
                required: true
            },
            Name: {
                type: ['string'],
                required: false
            },
            Policy: {
                type: ['object'],
                required: false
            },
            PublicAccessBlockConfiguration: {
                type: ['object'],
                required: false
            },
            VpcConfiguration: {
                type: ['object'],
                required: false
            }
        },
        Bucket: {
            AccelerateConfiguration: {
                type: ['object'],
                required: false
            },
            AccessControl: {
                type: ['string'],
                required: false
            },
            AnalyticsConfigurations: {
                type: ['object'],
                required: false
            },
            BucketEncryption: {
                type: ['object'],
                required: false
            },
            BucketName: {
                type: ['string'],
                required: true
            },
            CorsConfiguration: {
                type: ['object'],
                required: false
            },
            IntelligentTieringConfigurations: {
                type: ['object'],
                required: false
            },
            InventoryConfigurations: {
                type: ['object'],
                required: false
            },
            LifecycleConfiguration: {
                type: ['object'],
                required: false
            },
            LoggingConfiguration: {
                type: ['object'],
                required: false
            },
            MetricsConfigurations: {
                type: ['object'],
                required: false
            },
            NotificationConfiguration: {
                type: ['object'],
                required: false
            },
            ObjectLockConfiguration: {
                type: ['object'],
                required: false
            },
            ObjectLockEnabled: {
                type: ['object'],
                required: false
            },
            OwnershipControls: {
                type: ['object'],
                required: false
            },
            PublicAccessBlockConfiguration: {
                type: ['object'],
                required: false
            },
            ReplicationConfiguration: {
                type: ['object'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            },
            VersioningConfiguration: {
                type: ['object'],
                required: false
            },
            WebsiteConfiguration: {
                type: ['object'],
                required: false
            }
        }
    }
}