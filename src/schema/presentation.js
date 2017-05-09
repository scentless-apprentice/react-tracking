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
  },
};
