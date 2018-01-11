

/**
 * Describes basic attributes of the page design layout.
 */
module.exports = {
  additionalProperties: false,

  // TODO: What should be required?
  // required: [],

  description: 'Describes basic attributes of the page design layout.',

  properties: {

    /**
     * The type of NYT content asset as presented to the user during
     * the session.
    **/
    pageType: {
      type: 'string',
      description: 'The type of NYT content asset as presented to the user during the session.',
    },

    pageSubtype: {
      type: 'string',
      description: 'TBD',
    },

    cardId: {
      type: 'string',
      description: 'TBD',
    },

    cardType: {
      type: 'string',
      description: 'TBD',
    },

    cardRendition: {
      enum: ['whole', 'skim'],
      description: 'TBD',
    },

    program: {
      properties: {
        name: {
          type: 'string',
          description: 'home',
        },
        /**
         * PROVIDED BY: Vi platform
         * This should be the layout description that the end user sees after page resize (if any).
         * E.g., "1 column" or "2 column"
         */
        breakpoint: {
          type: 'array',
          description: '1 column',
        },
        /**
         * PROVIDED BY: Program manager
         * This is the top-level program (e.g., home, story) that is the same irrespective of
         * any user-specific flavors (e.g., anonymous home). For now, name and type may be the same
         */
        type: {
          type: 'string',
          description: 'home',
        },
        /**
         * PROVIDED BY: Program manager
         * The git hash representing the program. Note that this should be blank for now until
         * we can figure out how to best represent the version of the program
         * E.g. "12309239"
         */
        version: {
          type: 'string',
          description: '12309239',
        },
      },
    },
  },
};
