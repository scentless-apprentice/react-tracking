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
     * The module interacted with.
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
      }, // end interaction.module.properties
    }, // end interaction.module

    /**
     * The block interacted with.
     */
    block: {
      properties: {
        /**
         * The user-facing label of the block interacted with.
         * E.g. "Top Stories"
         */
        label: {
          type: 'string',
          description: 'Top Stories',
        },
        /**
         * TO-DO: What is this?
         */
        rendition: {
          type: 'string',
          description: '',
        },
        /**
         * The name of the block interacted with.
         * E.g. "top-stories"
         * TODO: Clarify this
         */
        name: {
          type: 'string',
          description: 'top-stories'
        },
        /**
         * The order in which a block appears in a program
         * E.g. 1 (first block within a program)
         * TODO: Clarify this - start at 0 or 1?
         */
        index: {
          type: 'int',
          description: 1,
        },
        /**
         * The version of a block's front-end implementation
         * E.g. 1 (first block within a program)
         * TODO: Can this be the git hash for the Block component?
         */
        version: {
          type: 'string',
          description: '1fjei9',
        },
        /**
         * The list powering a block
         * E.g. {name: 'briefing_california', uri: '123456789'}
         */
        list: {
          /**
           * The name of the list powering a block
           * E.g. 'briefing_california'
           */
          name: {
            type: 'string'
          },
          /**
           * The unique identifier (i.e., uri) that is the data source for a block
           * E.g. '123456789'
           */
          uri: {
            type: 'string'
          },
        },
      },
    },

    /**
     * The card interacted with.
     */
    card: {
      properties: {
        region: {
          type: 'string',
          description: '',
        },
        index: {
          type: 'int',
          description: 1,
        },
        /**
         * TO-DO: Should we change the key here, in case there's the risk of a keyword
         * conflict with 'type'?
         */
        type: {
          type: 'string',
          description: 'visual'
        },
        rendition: {
          enum: ['whole', 'skim'],
          description: 'whole',
        },
        name: {
          type: 'string',
        },
        label: {
          type: 'headline',

        },
        contentId: {
          type: 'string',
          description: '100000005090678'
        }
      }

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
      description: 'used to pass success/failure or other status messaging eg. log in success or failure. Many interactions won’t have a status. Those should set an empty string.',
    },

    pagetype:{
      type: 'string',
      description: 'pagetype when the interaction occurred'
    },

    'page_view_id': {
      type: 'string',
      description: 'for advertising ',
    }
  }, // end interaction.properties
};
