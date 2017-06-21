'use strict';

/**
* Contains data about external referrers, internal referrers and module
* interactions pertaining to the NYT user's session.
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `referrer`)
  required: ['url'],

  description: 'Contains data about external referrers, internal referrers and module interactions pertaining to the NYT user\'s session.',

  properties: {
    /**
     * Referring URL
     */
    url: {
      format: 'uri',
      description: 'A URL of previous page or document.referrer'
    }
  } // end referrer.properties
};