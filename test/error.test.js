const { ResourceError, TemplateError } = require('../src/utils/error');
const ErrorCode = require('../src/helpers/error-config');
const { TemplateErrorCode } = require('../src/helpers/error-config');

test('Jest mock', () => {
    const x = 2
    expect(x).toBe(2)
})

// Check error codes

function throwError (type = '') {
    if (type === 'resource'){
        throw new  ResourceError('Testing resource error', 
            ErrorCode.ResourceErrorCode.INVALID_PROPS,
            'Invalid props, please ensure valid props are supplied'
        )
    } else {
        throw new  TemplateError('Testing tempalte error', 
            ErrorCode.TemplateErrorCode.INCORRECT_FORMAT_PROVIDED,
            'Incorrect file format provided'
        )
    }

}

test('Resource Error test', () => {
    expect(() => throwError('resource')).toThrow(ResourceError)
    expect(() => throwError('resource')).toThrow('Testing resource error')
})

test('Template Error test', () => {
    expect(() => throwError('template')).toThrow(TemplateError)
    expect(() => throwError('template')).toThrow('Testing tempalte error')
})