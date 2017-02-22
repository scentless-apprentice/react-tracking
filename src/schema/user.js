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

    subscriptions: {
      items: {
        type: 'object'
      }
    },

    /**
     * Segments under 'wat' in NYT-D cookie
     */
    watSeg: { type: 'string' },

  }, // end user.properties
};
