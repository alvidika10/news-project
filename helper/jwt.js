const jwt = require('jsonwebtoken')

JWT_SECRET = 'secret'

function generateToken(token) {
    return jwt.sign(token, JWT_SECRET)
}

function verifyingToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    generateToken,
    verifyingToken
}