const validator = require('is-my-json-valid');

var validate = validator({
  required: true,
  type: 'object',
  properties: {
    name: {
      type: 'object',
      required: ['firstName', 'lastName'],
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        }
      }
    }
  }
});


module.exports = validate;
