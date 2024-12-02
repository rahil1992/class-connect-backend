/**
 * Property.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    propertyName: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    postalCode: {
      type: 'string',
    },
    propertyType: {
      type: 'string',
    },
    bedrooms: {
      type: 'number',
    },
    pricePerNight: {
      type: 'number',
    },
    description: {
      type: 'string',
    },
    amenities: {
      type: 'string',
    },
    provider: {
      model: 'Provider'
    }
  },

};

