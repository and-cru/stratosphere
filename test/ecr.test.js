const ecr = require('../src/resources/ecr');

test('Jest mock', () => {
    const x = 2
    expect(x).toBe(2)
})

// ECR testing - Creation - Happy path

test('Create PublicRepository', () => {
    const item = new ecr.PublicRepository('Sample')

    expect(item.name).toBe('Sample')
    expect(item.type).toBe('AWS::ECR::PublicRepository')
})

test('Create RegistryPolicy', () => {
    const item = new ecr.RegistryPolicy('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::ECR::RegistryPolicy')
})

test('Create ReplicationConfiguration', () => {
    const item = new ecr.ReplicationConfiguration('Sample')

    expect(item.name).toBe('Sample')
    expect(item.type).toBe('AWS::ECR::ReplicationConfiguration')
})

test('Create Repository', () => {
    const item = new ecr.Repository('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::ECR::Repository')
})

// ECR Testing - Properties - Sad Path