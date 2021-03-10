module.exports = {    
    ec2: {
        Instance: {
            AdditionalInfo: {
                type: ['string'],
                required: false
            },
            Affinity: {
                type: ['object', 'string'],
                required: false
            },
            AvailabilityZone: {
                type: ['object', 'string'],
                required: false
            },
            BlockDeviceMappings: {
                type: ['object'],
                required: false
            },
            CpuOptions: {
                type: ['object'],
                required: false
            },
            CreditSpecification: {
                type: ['object'],
                required: false
            },
            DisableApiTermination: {
                type: ['object', 'boolean'],
                required: false
            },
            EbsOptimized: {
                type: ['object', 'boolean'],
                required: false
            },
            ElasticGpuSpecifications: {
                type: ['object'],
                required: false
            },
            ElasticInferenceAccelerators: {
                type: ['object'],
                required: false
            },
            EnclaveOptions: {
                type: ['object'],
                required: false
            },
            HibernationOptions: {
                type: ['object'],
                required: false
            },
            HostId: {
                type: ['object', 'string'],
                required: false
            },
            HostResourceGroupArn: {
                type: ['object', 'string'],
                required: false
            },
            IamInstanceProfile: {
                type: ['object', 'string'],
                required: false
            },
            ImageId: {
                type: ['object', 'string'],
                required: true
            },
            InstanceInitiatedShutdownBehavior: {
                type: ['object', 'string'],
                required: false
            },
            InstanceType: {
                type: ['object', 'string'],
                required: false
            },
            Ipv6AddressCount: {
                type: ['object', 'number'],
                required: false
            },
            Ipv6Addresses: {
                type: ['object'],
                required: false
            },
            KernelId: {
                type: ['object', 'string'],
                required: false
            },
            KeyName: {
                type: ['object', 'string'],
                required: false
            },
            LaunchTemplate: {
                type: ['object'],
                required: false
            },
            LicenseSpecifications: {
                type: ['object'],
                required: false
            },
            Monitoring: {
                type: ['object', 'boolean'],
                required: false
            },
            NetworkInterfaces: {
                type: ['object'],
                required: false
            },
            PlacementGroupName: {
                type: ['object', 'string'],
                required: false
            },
            PrivateIpAddress: {
                type: ['object', 'string'],
                required: false
            },
            RamdiskId: {
                type: ['object', 'string'],
                required: false
            },
            SecurityGroupIds: {
                type: ['object'],
                required: false
            },
            SecurityGroups: {
                type: ['object'],
                required: false
            },
            SourceDestCheck: {
                type: ['object', 'boolean'],
                required: false
            },
            SsmAssociations: {
                type: ['object'],
                required: false
            },
            SubnetId: {
                type: ['object', 'string'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            },
            Tenancy: {
                type: ['object', 'string'],
                required: false
            },
            UserData: {
                type: ['object', 'string'],
                required: false
            },
            Volumes: {
                type: ['object'],
                required: false
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
        },
        AccessKey: {
            Serial: {
                type: ['number'],
                required: false
            },
            Status: {
                type: ['string'],
                required: false
            },
            UserName: {
                type: ['string'],
                required: true
            }
        },
        Group: {
            GroupName: {
                type: ['string'],
                required: true
            },
            ManagedPolicyArns: {
                type: ['object'],
                required: false
            },
            Path: {
                type: ['string'],
                required: false
            },
            Policies: {
                type: ['object'],
                required: false
            }
        },
        InstanceProfile: {
            InstanceProfileName: {
                type: ['string'],
                required: false
            },
            Path: {
                type: ['string'],
                required: false
            },
            Roles: {
                type: ['object'],
                required: true
            }
        },
        ManagedPolicy: {
            Description: {
                type: ['string'],
                required: false
            },
            Groups: {
                type: ['object'],
                required: false
            },
            ManagedPolicyName: {
                type: ['string'],
                required: false
            },
            Path: {
                type: ['string'],
                required: false
            },
            PolicyDocument: {
                type: ['object'],
                required: true
            },
            Roles: {
                type: ['object'],
                required: false
            },
            Users: {
                type: ['object'],
                required: false
            }
        },
        OIDCProvider: {
            ClientIdList: {
                type: ['object'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            },
            ThumbprintList: {
                type: ['object'],
                required: true
            },
            Url: {
                type: ['string'],
                required: false
            }
        },
        Policy: {
            Groups: {
                type: ['object'],
                required: false
            },
            PolicyDocument: {
                type: ['object'],
                required: true
            },
            PolicyName: {
                type: ['string'],
                required: true
            },
            Roles: {
                type: ['object'],
                required: false
            },
            Users: {
                type: ['object'],
                required: true
            }
        },
        User: {
            Groups: {
                type: ['object'],
                required: false
            },
            LoginProfile: {
                type: ['object'],
                required: false
            },
            ManagedPolicyArns: {
                type: ['object'],
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
            Tags: {
                type: ['object'],
                required: false
            },
            UserName: {
                type: ['string'],
                required: false
            }
        },
        UserToGroupAddition: {
            GroupName: {
                type: ['string'],
                required: true
            },
            Users: {
                type: ['object'],
                required: true
            }
        },
        VirtualMFADevice: {
            Path: {
                type: ['string'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            },
            Users: {
                type: ['object'],
                required: true
            },
            VirtualMfaDeviceName: {
                type: ['string'],
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
        },
        BucketPolicy: {
            Bucket: {
                type: ['string'],
                required: true
            },
            PolicyDocument: {
                type: ['object'],
                required: true
            }
        },
        StorageLens: {
            StorageLensConfiguration: {
                type: ['object'],
                required: true
            },
            Tags: {
                type: ['object'],
                required: false
            }
        }
    },
    ecr:  {
        PublicRepository: {
            RepositoryCatalogData: {
                type: ['object'],
                required: false
            },
            RepositoryName: {
                type: ['string'],
                required: false
            },
            RepositoryPolicyText: {
                type: ['object'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            }
        },
        RegistryPolicy: {
            PolicyText: {
                type: ['object'],
                required: true
            }
        },
        ReplicationConfiguration: {
            ReplicationConfiguration: {
                type: ['object'],
                required: true
            }
        },
        Repository: {
            ImageScanningConfiguration: {
                type: ['object'],
                required: false
            },
            ImageTagMutability: {
                type: ['object'],
                required: false
            },
            LifecyclePolicy: {
                type: ['object'],
                required: false
            },
            RepositoryName: {
                type: ['string'],
                required: true
            },
            RepositoryPolicyText: {
                type: ['object'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            }
        }
    },
    beanstalk: {
        Application: {
            ApplicationName: {
                type: ['string', 'object'],
                required: false
            },
            Description: {
                type: ['string', 'object'],
                required: false
            },
            ResourceLifecycleConfig: {
                type: ['object'],
                required: false
            }
        },
        ApplicationVersion: {
            ApplicationName: {
                type: ['string', 'object'],
                required: true
            },
            Description: {
                type: ['string', 'object'],
                required: false
            },
            SourceBundle: {
                type: ['object'],
                required: true
            }
        },
        ConfigurationTemplate: {
            ApplicationName: {
                type: ['string', 'object'],
                required: true
            },
            Description: {
                type: ['string', 'object'],
                required: false
            },
            EnvironmentId: {
                type: ['object', 'string'],
                required: true
            },
            OptionSettings: {
                type: ['object'],
                required: false
            },
            PlatformArn: {
                type: ['object', 'string'],
                required: false
            },
            SolutionStackName: {
                type: ['object', 'string'],
                required: false
            },
            SourceConfiguration: {
                type: ['object'],
                required: false
            }
        }
    }
}