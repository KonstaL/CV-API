
module.exports = {
  required: true,
  type: 'object',
  properties: {
    name: {
      type: 'object',
      required: ['firstName', 'lastName'],
      properties: {
        firstName: {
          type: 'string',
          required: true
        },
        lastName: {
          type: 'string',
          required: true
        }
      }
    },
    summary: {
      type: 'string',
      required: true
    },
    workExperience: {
      type: 'object',
      required: true,
      properties: {
        work1: {

        },
        work2: {

        },
        work3: {

        }
      }
    }
  }
};


