/**
* User specific data.
*/
module.exports = {
  'description': 'Describes basic attributes of the NYT user.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `user`)
  required: ['type'],

  properties: {
    /**
     * The NYT Registration ID of the user.
     */
    regiId: {
      type: 'string',
      description: 'The NYT registration ID of the NYT user.',
    },

    /**
     * Type of NYT user.
     */
    type: {
      enum: ['anon', 'regi', 'sub'],
      description: 'A value that indicates the type of NYT user',
    },

    subscriptions: {
      description: 'TBD',
      items: {
        type: 'object'
      }
    },

    /**
     * Segments under 'wat' in NYT-D cookie
     */
    watSegs: {
      type: 'string',
      description: 'segments under ‘wat’ in the NYT-D cookie',
    },

    propensity: {
      description: 'Metadata about the user\'s propensity to subscribe',
      type: 'object',
      properties: {},
    },

    tracking: {
      description: 'Metadata about the user\s latest behavior on our site',
      type: 'object',
      properties: {},
    }

  }, // end user.properties
};
