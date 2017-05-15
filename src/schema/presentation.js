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

    // TODO: Why is this here?
    documentHeight: {
      type: 'number',
      description: 'integer height of the entire page in pixels',
    },

    program: {
      properties: {
        name: {
          type: 'string',
          description: 'home'
        },
        /**
         * PROVIDED BY: Vi platform
         * TODO: Do we need this as an explicit key within the program object? I think it should be outside of a program and defined by the application
         */
        rendition: {
          type: 'string',
          description: 'desktop'
        },
        /**
         * PROVIDED BY: Program manager
         */
        type: {
          enum: ['home', 'story'],
          description: 'tbd',
        },
        /**
         * The git hash representing the program
         * TODO: Should this be the git hash of the Vi front-end rendering the program, or the program itself?
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
