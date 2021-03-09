import ResourceError from '../utils/error.js'
import ErrorCodes from '../helpers/error-config.js'
import _ from 'lodash/array.js'

export function generateResources (resourceList = []) {
    return resourceList.map(item => {
        return item.createDefinition()
    }).reduce((obj, item) => {
        const key = Object.keys(item)[0]
        return {...obj, [key]: item[key]}
    }, {})
}

export function validateAndSanitise (props, expectedProps) {
    return Object.keys(props).filter(prop => {
        if (!Object.keys(expectedProps).includes(prop)) {
            throw new ResourceError('Invalid property supplied', ErrorCodes.ResourceErrorCode.INVALID_PROPS)
        }

        if (!expectedProps[prop].type.includes(typeof props[prop])) {
            throw new ResourceError('Property type mismatch', ErrorCodes.ResourceErrorCode.PROP_TYPE_MISMATCH)
        }

        const valid = (Object.keys(expectedProps).includes(prop))
        const type = (expectedProps[prop].type.includes(typeof props[prop]))
        return valid && type
    })
}

export function extractRequiredProps (expectedProps) {
    return Object.keys(expectedProps).filter(prop => {
        return expectedProps[prop].required
    })
}

export function checkForRequiredProps (validAndSanitised, requiredProperties) {
    if (_.difference(requiredProperties, validAndSanitised).length > 0) {
        throw new ResourceError('Missing required property', ErrorCodes.ResourceErrorCode.MISSING_REQUIRED_PROPS)
    }

    return (validAndSanitised.length > 0) &&
    (_.difference(requiredProperties, validAndSanitised).length === 0)
}