/**
* User specific data.
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `user`)
  required: ['type'],

  properties: {
    /**
     * The NYT Registration ID of the user.
     */
    regiId: { type: 'string' },

    /**
     * Type of NYT user.
     */
    type: {
      enum: ['anon', 'regi', 'sub'],
    },

    /**
     * Date when the first subscription associated
     * with the user started.
     */
    startDate: { format: 'date' },

    /**
     * Active bundles for this user.
     */
    activeBundles: {
      items: { type: 'string' },
    },

    /**
     * Segments under 'wat' in NYT-D cookie
     */
    watSeg: { type: 'string' },

  }, // end user.properties
};
