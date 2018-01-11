/**
 * Contains data pertaining to the user's session.
 */
module.exports = {
  desc: 'Contains data pertaining to the NYT user\'s session.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `user`)
  // required: ['type'],

  properties: {
    meterCount: {
      type: 'number',
      description: 'A value that indicates the total number of metered NYT content assets consumed during the user session.',
    },
    isLoggedIn: {
      type: 'boolean',
      description: 'A flag that indicates whether a user session is authenticated.',
    },
  },
};
