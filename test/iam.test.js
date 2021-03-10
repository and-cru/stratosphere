const iam = require('../src/resources/iam');

test('Jest mock', () => {
    const x = 2
    expect(x).toBe(2)
})

// IAM testing

test('Creation - IAM Role', () => {
    const item = new iam.Role('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::Role')
})

test('Creation - IAM AccessKey', () => {
    const item = new iam.AccessKey('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::AccessKey')
})

test('Creation - IAM Group', () => {
    const item = new iam.Group('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::Group')
})

test('Creation - IAM InstanceProfile', () => {
    const item = new iam.InstanceProfile('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::InstanceProfile')
})

test('Creation - IAM ManagedPolicy', () => {
    const item = new iam.ManagedPolicy('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::ManagedPolicy')
})

test('Creation - IAM OIDCProvider', () => {
    const item = new iam.OIDCProvider('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::OIDCProvider')
})

test('Creation - IAM Policy', () => {
    const item = new iam.Policy('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::Policy')
})

test('Creation - IAM User', () => {
    const item = new iam.User('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::User')
})

test('Creation - IAM UserToGroupAddition', () => {
    const item = new iam.UserToGroupAddition('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::UserToGroupAddition')
})

test('Creation - IAM VirtualMFADevice', () => {
    const item = new iam.VirtualMFADevice('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::IAM::VirtualMFADevice')
})

// IAM testing - Error handling