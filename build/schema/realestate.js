'use strict';

/**
 * Contains data about custom dimesnsions for the realestate application.
 * Used for keeping track of renters/buyers, listings, and module interactions.
 */
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  required: [''],

  description: 'Contains data about custom dimesnsions for the realestate application',

  properties: {
    /**
     * Referring URL
     */
    channel: {
      type: 'string',
      description: 'CD109 - This describes the page channel, either rent or buy.',
    },

    pageType: {
      type: 'string',
      description: 'CD110 - Not used',
    },

    moduleId: {
      type: 'string',
      description: 'CD111 - Used to identify modules for the real estate CMS',
    },

    moduleType: {
      type: 'string',
      description: 'CD112 - Not used',
    },

    moduleItemId: {
      type: 'string',
      description: 'CD113 - Not used',
    },

    listingId: {
      type: 'string',
      description: 'CD143 - The unique listing identifier',
    },

    listingPrice: {
      type: 'string',
      description: 'CD144 - The price of the listing',
    },

    buildingId: {
      type: 'string',
      description: 'CD144 - The unique building identifier',
    },

    new: {
      type: 'string',
      description: 'CD145 - 1 if the listing is new, null if not',
    },

    reduced: {
      type: 'string',
      description: 'CD146 - 1 if the listing is reduced, null if not',
    },

    openHouse: {
      type: 'string',
      description: 'CD147 - 1 if the listing has an open house, null if not',
    },
  }, // end referrer.properties
};
