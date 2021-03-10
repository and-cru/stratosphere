const beanstalk = require('../src/resources/beanstalk');

test('Jest mock', () => {
    const x = 2
    expect(x).toBe(2)
})

// Beanstalk testing -  Creation

test('Create Application', () => {
    const item = new beanstalk.Application('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::ElasticBeanstalk::Application')
})

test('Create Application Version', () => {
    const item = new beanstalk.ApplicationVersion('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::ElasticBeanstalk::ApplicationVersion')
})

test('Create Saved Config', () => {
    const item = new beanstalk.ConfigurationTemplate('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::ElasticBeanstalk::ConfigurationTemplate')
})

test('Create Environment', () => {
    const item = new beanstalk.Environment('Test')

    expect(item.name).toBe('Test')
    expect(item.type).toBe('AWS::ElasticBeanstalk::Environment')
})