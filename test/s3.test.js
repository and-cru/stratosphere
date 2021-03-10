const s3 = require('../src/resources/s3');

test('Jest mock', () => {
    const x = 2
    expect(x).toBe(2)
})

// S3 testing

test('Create AccessPoint', () => {
    const item = new s3.AccessPoint('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::S3::AccessPoint')
})

test('Create Bucket', () => {
    const item = new s3.Bucket('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::S3::Bucket')
})

test('Create BucketPolicy', () => {
    const item = new s3.BucketPolicy('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::S3::BucketPolicy')
})

test('Create StorageLens', () => {
    const item = new s3.StorageLens('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::S3::StorageLens')
})