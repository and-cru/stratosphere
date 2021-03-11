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
    },
    rds: {
        DBCluster: {
            AssociatedRoles: {
                type: ['object'],
                required: false
            },
            AvailabilityZones: {
                type: ['object'],
                required: false
            },
            BacktrackWindow: {
                type: ['number'],
                required: false
            },
            BackupRetentionPeriod: {
                type: ['object', 'number'],
                required: false
            },
            DatabaseName: {
                type: ['object', 'string'],
                required: true
            },
            DBClusterIdentifier: {
                type: ['object', 'string'],
                required: false
            },
            DBClusterParameterGroupName: {
                type: ['object', 'string'],
                required: false
            },
            DBSubnetGroupName: {
                type: ['object', 'string'],
                required: false
            },
            DeletionProtection: {
                type: ['boolean'],
                required: false
            },
            EnableCloudwatchLogsExports: {
                type: ['object'],
                required: false
            },
            EnableHttpEndpoint: {
                type: ['boolean'],
                required: false
            },
            EnableIAMDatabaseAuthentication: {
                type: ['boolean'],
                required: false
            },
            Engine: {
                type: ['object', 'string'],
                required: true
            },
            EngineMode: {
                type: ['object', 'string'],
                required: false
            },
            EngineVersion: {
                type: ['string', 'object'],
                required: false
            },
            GlobalClusterIdentifier: {
                type: ['object', 'string'],
                required: false
            },
            KmsKeyId: {
                type: ['string'],
                required: false
            },
            MasterUsername: {
                type: ['object', 'string'],
                required: false
            },
            MasterUserPassword: {
                type: ['object', 'string'],
                required: false
            },
            Port: {
                type: ['number'],
                required: false
            },
            PreferredBackupWindow: {
                type: ['string'],
                required: false
            },
            PreferredMaintenanceWindow: {
                type: ['string'],
                required: false
            },
            ReplicationSourceIdentifier: {
                type: ['string'],
                required: false
            },
            RestoreType: {
                type: ['string'],
                required: false
            },
            ScalingConfiguration: {
                type: ['object'],
                required: false
            },
            SnapshotIdentifier: {
                type: ['string', 'object'],
                required: false
            },
            SourceDBClusterIdentifier: {
                type: ['string'],
                required: false
            },
            SourceRegion: {
                type: ['string', 'object'],
                required: false
            },
            StorageEncrypted: {
                type: ['boolean'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            },
            UseLatestRestorableTime: {
                type: ['boolean'],
                required: false
            },
            VpcSecurityGroupIds: {
                type: ['object'],
                required: false
            }
        },
        DBInstance: {
            AllocatedStorage: {
                type: ['string', 'object'],
                required: false
            },
            AllowMajorVersionUpgrade: {
                type: ['boolean'],
                required: false
            },
            AssociatedRoles: {
                type: ['object'],
                required: false
            },
            AutoMinorVersionUpgrade: {
                type: ['boolean'],
                required: false
            },
            AvailabilityZone: {
                type: ['object', 'string'],
                required: false
            },
            BackupRetentionPeriod: {
                type: ['number'],
                required: false
            },
            CACertificateIdentifier: {
                type: ['object', 'string'],
                required: false
            },
            CharacterSetName: {
                type: ['string'],
                required: false
            },
            CopyTagsToSnapshot: {
                type: ['boolean'],
                required: false
            },
            DBClusterIdentifier: {
                type: ['object', 'string'],
                required: false
            },
            DBInstanceClass: {
                type: ['string', 'object'],
                required: true
            },
            DBInstanceIdentifier: {
                type: ['string'],
                required: false
            },
            DBName: {
                type: ['object', 'string'],
                required: false
            },
            DBParameterGroupName: {
                type: ['object', 'string'],
                required: false
            },
            DBSecurityGroups: {
                type: ['object'],
                required: false
            },
            DBSnapshotIdentifier: {
                type: ['object', 'string'],
                required: false
            },
            DBSubnetGroupName: {
                type: ['string'],
                required: false
            },
            DeleteAutomatedBackups: {
                type: ['boolean'],
                required: false
            },
            DeletionProtection: {
                type: ['boolean'],
                required: false
            },
            Domain: {
                type: ['string', 'object'],
                required: false
            },
            DomainIAMRoleName: {
                type: ['string', 'object'],
                required: false
            },
            EnableCloudwatchLogsExports: {
                type: ['object'],
                required: false
            },
            EnableIAMDatabaseAuthentication: {
                type: ['boolean'],
                required: false
            },
            EnablePerformanceInsights: {
                type: ['boolean'],
                required: false
            },
            Engine: {
                type: ['string'],
                required: true
            },
            EngineVersion: {
                type: ['string', 'object'],
                required: false
            },
            Iops: {
                type: ['number'],
                required: false
            },
            KmsKeyId: {
                type: ['string', 'object'],
                required: false
            },
            LicenseModel: {
                type: ['string'],
                required: false
            },
            MasterUsername: {
                type: ['string', 'object'],
                required: true
            },
            MasterUserPassword: {
                type: ['string', 'object'],
                required: true
            },
            MaxAllocatedStorage: {
                type: ['number'],
                required: false
            },
            MonitoringInterval: {
                type: ['number'],
                required: false
            },
            MonitoringRoleArn: {
                type: ['object', 'string'],
                required: false
            },
            MultiAZ: {
                type: ['boolean'],
                required: false
            },
            OptionGroupName: {
                type: ['string'],
                required: false
            },
            PerformanceInsightsKMSKeyId: {
                type: ['string'],
                required: false
            },
            PerformanceInsightsRetentionPeriod: {
                type: ['number'],
                required: false
            },
            Port: {
                type: ['string', 'object'],
                required: false
            },
            PreferredBackupWindow: {
                type: ['string'],
                required: false
            },
            PreferredMaintenanceWindow: {
                type: ['string'],
                required: false
            },
            ProcessorFeatures: {
                type: ['object'],
                required: false
            },
            PromotionTier: {
                type: ['number'],
                required: false
            },
            PubliclyAccessible: {
                type: ['boolean'],
                required: false
            },
            SourceDBInstanceIdentifier: {
                type: ['string'],
                required: false
            },
            SourceRegion: {
                type: ['string'],
                required: false
            },
            StorageEncrypted: {
                type: ['boolean'],
                required: false
            },
            StorageType: {
                type: ['object', 'string'],
                required: false
            },
            Tags: {
                type: ['object'],
                required: false
            },
            Timezone: {
                type: ['string'],
                required: false
            },
            UseDefaultProcessorFeatures: {
                type: ['boolean'],
                required: false
            },
            VPCSecurityGroups: {
                type: ['object'],
                required: false
            }
        },
        DBClusterParameterGroup: {
            Description: {
                type:  ['string'],
                required: true
            },
            Family: {
                type:  ['string'],
                required: true
            },
            Parameters: {
                type:  ['object'],
                required: true
            },
            Tags: {
                type:  ['object'],
                required: false
            }
        },
        DBParameterGroup: {
            Description: {
                type:  ['string'],
                required: true
            },
            Family: {
                type:  ['string'],
                required: true
            },
            Parameters: {
                type:  ['object'],
                required: true
            },
            Tags: {
                type:  ['object'],
                required: false
            }
        },
        DBProxy: {
            Auth: {
                type:  ['object'],
                required: true
            },
            DBProxyName: {
                type:  ['string'],
                required: true
            },
            DebugLogging: {
                type:  ['boolean'],
                required: false
            },
            EngineFamily: {
                type:  ['string'],
                required: true
            },
            IdleClientTimeout: {
                type:  ['number'],
                required: false
            },
            RequireTLS: {
                type:  ['boolean'],
                required: false
            },
            RoleArn: {
                type:  ['object', 'string'],
                required: true
            },
            Tags: {
                type:  ['object'],
                required: false
            },
            VpcSecurityGroupIds: {
                type:  ['object'],
                required: false
            },
            VpcSubnetIds: {
                type:  ['string', 'object'],
                required: false
            }
        },
        DBProxyTargetGroup: {
            ConnectionPoolConfigurationInfo: {
                type: ['object'],
                required: false
            },
            DBClusterIdentifiers: {
                type: ['object'],
                required: false
            },
            DBInstanceIdentifiers: {
                type: ['object'],
                required: false
            },
            DBProxyName: {
                type: ['string'],
                required: true
            },
            TargetGroupName: {
                type: ['string'],
                required: true
            }
        },
        DBSecurityGroup: {
            DBSecurityGroupIngress: {
                type: ['object'],
                required: true
            },
            EC2VpcId: {
                type: ['string', 'object'],
                required: false
            },
            GroupDescription: {
                type: ['string'],
                required: true
            },
            Tags: {
                type: ['object'],
                required: false
            }
        },
        DBSecurityGroupIngress: {
            CIDRIP: {
                type: ['string'],
                required: false
            },
            DBSecurityGroupName: {
                type: ['string', 'object'],
                required: true
            },
            EC2SecurityGroupId: {
                type: ['string'],
                required: false
            },
            EC2SecurityGroupName: {
                type: ['string'],
                required: false
            },
            EC2SecurityGroupOwnerId: {
                type: ['string'],
                required: false
            }
        },
        DBSubnetGroup: {
            DBSubnetGroupDescription: {
                type: ['string'],
                required: true
            },
            DBSubnetGroupName: {
                type: ['string'],
                required: false
            },
            SubnetIds: {
                type: ['object'],
                required: true
            },
            Tags: {
                type: ['object'],
                required: false
            }
        }
    }
}