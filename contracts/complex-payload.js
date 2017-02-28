const joi = require('joi')

module.exports = {
  name: 'complex payload schema',
  request: {
    path: '/api/complex-payload',
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: {
      email: 'someone@github.com'
    },
    bodySchema: joi.object().keys({
      email: joi.string(),
      password: joi.string(),
      remember: joi.boolean()
    })
  },
  response: {
    status: 200
  }
}
