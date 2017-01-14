/**
 * Describes basic attributes of the page design layout.
 */
module.exports = {
  additionalProperties: false,

  // TODO: What should be required?
  // required: [],

  properties: {

    /**
     * The type of NYT content asset as presented to the user during
     * the session.
     */
    pageType: { type: 'string' },

    /**
     * TBD ???
     */
    pageSubtype: { type: 'string' },

    cardId: { type: 'string' },
    cardType: { type: 'string' },
    cardRendition: { enum: ['whole', 'skim'] },

    // TODO: Why is this here?
    documentHeight: { type: 'number' },
  },
};
