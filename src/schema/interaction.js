/**
* Describes a user interaction event
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `referrer`)
  required: ['type'],

  properties: {
    /**
     * The module interaccted with.
     */
    module: {
      additionalProperties: false,
      properties: {
        /**
         * The name of the module interacted with.
         * E.g. "see more"
         */
        name: { type: 'string' },

        /**
         * The context the module is rendered in.
         * E.g. "block"
         */
        context: { type: 'string' },

        /**
         * Module's label.
         * E.g. "Top News", "Featured", "Opinion", etc.
         */
        label: { type: 'string' },
      }, // end interaction.module.properties
    }, // end interaction.module

    /**
     * The type of interaction
     */
    type: { type: 'string' },

    /**
     * Used to pass success/failure or other status message.
     */
     // TODO: Can this be an enum, or better yet, boolean?
    status: { type: 'string' },
  }, // end interaction.properties
};
