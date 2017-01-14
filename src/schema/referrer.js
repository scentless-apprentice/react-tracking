/**
* Contains data about external referrers, internal referrers and module
* interactions pertaining to the NYT user's session.
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `referrer`)
  required: ['url'],

  properties: {
    /**
     * Referring URL
     */
    url: { format: 'uri' },
  }, // end referrer.properties
};
