/**
 * Provider.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string',
      encrypt: true
    },
    name: {
      type: 'string',
    },
    contactNumber: {
      type: 'string',
    },
    status: {
      type: 'string',
      defaultsTo: 'pending',
      enum: ['pending', 'approved', 'rejected']
    },
    address: {
      type: 'string',
    }
  },
  customToJSON: function() {
    // Return a shallow copy of this record with the password and ssn removed.
    return _.omit(this, ['password']);
  }

};

