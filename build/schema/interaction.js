'use strict';

/**
* Describes a user interaction event
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `referrer`)
  required: ['type'],

  description: 'module behavioral/click tracking will have additional fields as we refine the the specifications for that effort',

  properties: {
    /**
     * The module interaccted with.
     */
    module: {
      additionalProperties: false,
      description: 'TBD',
      properties: {
        /**
         * The name of the module interacted with.
         * E.g. "see more"
         */
        name: {
          type: 'string',
          description: 'see more'
        },

        /**
         * The context the module is rendered in.
         * E.g. "block"
         */
        context: {
          type: 'string',
          description: 'block'
        },

        /**
         * Module's label.
         * E.g. "Top News", "Featured", "Opinion", etc.
         */
        label: {
          type: 'string',
          description: 'Top News|Featured|Opinion|News|Culture|etc...'
        }
      } // end interaction.module.properties
    }, // end interaction.module

    /**
     * The type of interaction
     */
    type: {
      type: 'string',
      description: 'click'
    },

    /**
     * Used to pass success/failure or other status message.
    */
    status: {
      type: 'string',
      description: 'used to pass success/failure or other status messaging eg. log in success or failure. Many interactions won’t have a status. Those should set an empty string.'
    },

    pagetype: {
      type: 'string',
      description: 'pagetype when the interaction occurred'
    },

    'page_view_id': {
      type: 'string',
      description: 'for advertising '
    }
  } // end interaction.properties
};