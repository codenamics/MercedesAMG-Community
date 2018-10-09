const validator = require('validator');
const isEmpty = require('./is-empty')

const validateProfileInput = (data) => {
    let errors = {}

    data.handle = !isEmpty(data.handle) ? data.handle : ''
    data.status = !isEmpty(data.status) ? data.status : ''
    data.intrests = !isEmpty(data.intrests) ? data.intrests : ''

    if (!validator.isLength(data.handle, {
            min: 2,
            max: 40
        })) {
        errors.handle = 'Handle needs to be between 2 and 4 characters'
    }
    if (validator.isEmpty(data.handle)) {
        errors.handle = 'Handle is required'
    }
    if (validator.isEmpty(data.status)) {
        errors.status = 'Status is required'
    }
    if (validator.isEmpty(data.intrests)) {
        errors.intrests = 'Interests field is required'
    }
    if (!isEmpty(data.youtube)) {
        if (!validator.isURL(data.youtube)) {
            errors.youtube = 'Not valid URL'
        }
    }
    if (!isEmpty(data.twitter)) {
        if (!validator.isURL(data.twitter)) {
            errors.twitter = 'Not valid URL'
        }
    }
    if (!isEmpty(data.facebook)) {
        if (!validator.isURL(data.facebook)) {
            errors.facebook = 'Not valid URL'
        }
    }
    if (!isEmpty(data.instagram)) {
        if (!validator.isURL(data.instagram)) {
            errors.instagram = 'Not valid URL'
        }
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
module.exports = validateProfileInput