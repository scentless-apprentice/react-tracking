/**
 * Module specific data.
 */
module.exports = {
  description: 'Describes attributes of a module on the page',

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

    // Region to be defined
    region: {
      properties: {},
    },

    /**
     * Module element
     * Specific link or tool interacted with in the module
     */
    element: {
      type: 'object',
      description: 'Specific link or tool interacted with in the module',
      properties: {
        name: {
          type: 'string',
          description: 'permanent value / slug / id',
        },

        /**
         * URL of an asset associated with the link
         */
        url: {
          type: 'string',
          description: 'URL associated with the element, eg. article being shared or linked to',
        },

        /**
         * The text or displayed to the user for this element
         */
        label: {
          type: 'string',
          description: 'text displayed to the user for this element',
        },
      },
    },
  }, // end module.properties
};
