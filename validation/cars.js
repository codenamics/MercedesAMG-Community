const validator = require('validator');
const isEmpty = require('./is-empty')

const validateCarsInput = (data) => {
    let errors = {}

    data.model = !isEmpty(data.model) ? data.model : ''
    data.horsepower = !isEmpty(data.horsepower) ? data.horsepower : ''
    // data.from = !isEmpty(data.from) ? data.from : ''


    if (validator.isEmpty(data.model)) {
        errors.model = 'Model field is required'
    }
    if (validator.isEmpty(data.horsepower)) {
        errors.horsepower = 'Horsepower field is required'
    }
    // if (validator.isEmpty(data.from)) {
    //     errors.from = 'From field is required'
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
module.exports = validateCarsInput