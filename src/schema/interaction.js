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
         * PROVIDED BY: Program manager
         * Provided by `block.title`
         * E.g. "Top Stories"
         */
        label: {
          type: 'string',
          description: 'Top Stories',
        },
        /**
         * PROVIDED BY: Program manager (maps to block.template)
         * E.g., 'Overflow'
         */
        rendition: {
          type: 'string',
          description: 'Overflow',
        },
        /**
         * The name of the block interacted with.
         * PROVIDED BY: Program manager (block.data_id)
         * E.g. "mobile-home/1"
         */
        name: {
          type: 'string',
          description: 'mobile-home/1'
        },
        /**
         * The order in which a block appears in a program
         * PROVIDED BY: Vi platform
         * E.g. 0 (i.e., first block within a program)
         */
        index: {
          type: 'integer',
          description: 'The ordinal rank of a block within a program (zero-indexed)',
        },
        /**
         * The version of a block's front-end implementation
         * E.g. 1 (first block within a program)
         * PROVIDED BY: Vi platform
         * TODO: Can this be the git hash for the Block component?
         */
        version: {
          type: 'string',
          description: '1fjei9',
        },
        /**
         * The list powering a block
         * PROVIDED BY: Program manager (block.dataSource)
         * E.g. {name: 'briefing_california', uri: '123456789'}
         */
        list: {
          properties: {
            /**
             * The name of the list powering a block
             * TODO: This isn't provided by the program, only the URI is provided. Can we omit this?
             * E.g. 'briefing_california'
             */
            name: {
              type: 'string'
            },
            /**
             * The unique identifier (i.e., uri) that is the data source for a block
             * PROVIDED BY: Program manager
             * E.g. '123456789'
             */
            uri: {
              type: 'string'
            },
          },
        },
      },
    },

    /**
     * The card interacted with.
     */
    card: {
      properties: {
        /**
         * TO-DO: What is an example of this?
         */
        region: {
          type: 'string',
          description: '',
        },
        /**
         * TO-DO: This is the ordinal rank of a card within a block, right? I.e., does not dictate visual order of a card in a block - e.g., at desktop viewports, a card with a higher index may appear "above" a card with a lower index in the same block due to multi-column design
         * PROVIDED BY: Vi platform
         */
        index: {
          type: 'integer',
          description: 'An integer representing the ordinal rank of a card within a block',
        },
        /**
         * TO-DO: Can this be the card template? E.g., bullet
         * TO-DO: Should this be an enum?
         * NOTE: https://github.com/nytm/wf-project-vi/blob/master/src/shared/Card/index.js#L25
         * TO-DO: Should we change the key here, in case there's the risk of a keyword
         * conflict with 'type'?
         * PROVIDED BY: Vi platform
         */
        type: {
          type: 'string',
          description: 'visual'
        },
        /**
         * The primary user-facing label on the card - should be headline or summary
         * PROVIDED BY: Vi platform
         * E.g. 'Trump fires Comey from FBI'
         */
        rendition: {
          enum: ['whole', 'skim'],
          description: 'whole',
        },
        /**
         * PROVIDED BY: Samizdat data
         */
        url: {
          type: 'string',
          description: 'https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html',
        },
        /**
         * The primary user-facing label on the card - should be headline or summary
         * PROVIDED BY: Samizdat data
         * E.g. 'Trump fires Comey from FBI'
         */
        label: {
          type: 'string',
          description: 'headline'
        },
        /**
         * The scoop ID for the asset behind the card
         * PROVIDED BY: Samizdat data
         * E.g. '100000005090678'
         */
        id: {
          type: 'string',
          description: '100000005090678'
        }
      },
    },

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
