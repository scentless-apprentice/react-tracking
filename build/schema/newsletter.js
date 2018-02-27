'use strict';

/**
 * Module specific data.
 */
module.exports = {
  description: 'Describes attributes of a newsletter module ',
  // all properties not explicilty listed
  additionalProperties: true,

  properties: {
    /**
     * Identifier code for a newsletter.
     * E.g. "TY"
     */
    product: {
      type: 'string',
      description: 'Identifier code for a newsletter'
    },

    /**
     * Descriptive name of a newsletter subscription module
     */
    productName: {
      type: 'string',
      description: 'block'
    }
  } // end module.properties
};