function validateEmail(email){
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return emailRegex.test(email)
}

module.exports = validateEmail