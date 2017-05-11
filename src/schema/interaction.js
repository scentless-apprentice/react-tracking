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
         * Provided by `block.title`
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
         * TODO: Clarify this - would `block.template` be more appropriate?
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
         * Provided by block.dataSource
         * E.g. {name: 'briefing_california', uri: '123456789'}
         */
        list: {
          /**
           * The name of the list powering a block
           * TODO: This isn't provided by the program, only the URI is provided
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
        /**
         * TO-DO: What is an example of this?
         */
        region: {
          type: 'string',
          description: '',
        },
        /**
         * TO-DO: This is the ordinal rank of a card within a block, right? I.e., does not dictate visual order of a card in a block - e.g., at desktop viewports, a card with a higher index may appear "above" a card with a lower index in the same block due to multi-column design
         */
        index: {
          type: 'int',
          description: 1,
        },
        /**
         * TO-DO: Can this be the card template? E.g., bullet
         * TO-DO: Should this be an enum?
         * NOTE: https://github.com/nytm/wf-project-vi/blob/master/src/shared/Card/index.js#L25
         * TO-DO: Should we change the key here, in case there's the risk of a keyword
         * conflict with 'type'?
         */
        type: {
          type: 'string',
          description: 'visual'
        },
        /**
         * The primary user-facing label on the card - should be headline or summary
         * Provided by the Vi platform
         * E.g. 'Trump fires Comey from FBI'
         */
        rendition: {
          enum: ['whole', 'skim'],
          description: 'whole',
        },
        /**
         * TO-DO: Do we need this if we have the Scoop ID? Both should be unique identifiers
         */
        name: {
          type: 'string',
          description: '11comey',
        },
        /**
         * The primary user-facing label on the card - should be headline or summary
         * Provided by the Samizdat response
         * E.g. 'Trump fires Comey from FBI'
         */
        label: {
          type: 'string',
          description: 'headline'
        },
        /**
         * The scoop ID for the asset behind the card
         * Provided by the Samizdat response
         * E.g. '100000005090678'
         */
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
