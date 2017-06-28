/**
* Module specific data.
*/
module.exports = {
  'description': 'Describes attributes of a module on the page',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    /**
     * The name of the module interacted with.
     * E.g. "see more"
     */
    name: {
      type: 'string',
      description: 'see more',
    },

    /**
     * The context the module is rendered in.
     * E.g. "block"
     */
    context: {
      type: 'string',
      description: 'block',
    },

    /**
     * Module's label.
     * E.g. "Top News", "Featured", "Opinion", etc.
     */
    label: {
      type: 'string',
      description: 'Top News|Featured|Opinion|News|Culture|etc...',
    },

  }, // end module.properties
};
