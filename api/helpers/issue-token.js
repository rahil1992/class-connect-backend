const jwt = require('jsonwebtoken');
module.exports = {


  friendlyName: 'Issue token',


  description: '',


  inputs: {
    payload: {type: 'ref'},
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    sails.log.info('Issue token')
    let token = await jwt.sign(inputs.payload,'secret',{ expiresIn: 60 * 60 * 24 });
    sails.log.info('Token issued:' + token)
    return exits.success(token);
  }


};

