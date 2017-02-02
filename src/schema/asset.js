/**
 * Describes attributes of the NYT content asset.
 */
module.exports = {
  additionalProperties: false,

  // TODO: What else should be required?
  required: ['id'],

  properties: {
    /**
     * The canonical URL of the NYT content asset.
     * Can be omitted for certain "embedded-only" content types
     * like “image slideshow” and some “interactive graphics” assets.
     */
    url: { format: 'uri' },

    /**
     * The NYT content asset's public-facing label for site navigation
     * that is meant to reflect a core, permanent category of the
     * NYT report.
     */
    section: { type: 'string' },

    /**
     * The NYT content asset's public-facing label for site navigation that
     * sits hierarchically under a section and is meant to reflect a core,
     * permanent category of the NYT report.
     */
    subSection: { type: 'string' },

    /**
     * Public-facing headline.
     */
    headline: { type: 'string' },

     /**
      * The list of authors of the NYT content asset, usually joined together
      * with commas and a final "and" to form a byline. Ordinality is important
      * within the newsroom, and generally, authors are ranked in descending
      * order of their contributions to the content or so that the author
      * present in the location where the news events transpired is listed first.
      */
      // FIXME: (JG) I set this as an Array type, but the Google Doc suggests
      //        manually joining the authors, which I'd like to avoid.
    authors: { items: { type: 'string' } },

    /**
     * SCOOP id.
     */
    id: { type: 'string' },

    /**
     * UNIX timestamp value that indicates when this asset was first digitally
     * published.
     */
    publishedTimestamp: { format: 'date-time' },

    /**
     * UNIX timestamp when the asset was last modified.
     */
    lastUpdatedTimestamp: { format: 'date-time' },

    /**
     * The name of the NYT content asset collection. A collection is a grouping
     * of two or more NYT content assets collected together based on
     * journalistic intent.
     */
    collectionName: { type: 'string' },

    /**
     * The type of collection.
     */
    collectionType: { enum: ['column', 'series', 'issue'] },

    /**
     * The name of the NYT newsroom team that is the current owner of the asset.
     */
    desk: { type: 'string' },

    /**
     * Public-facing label, typically appears before the headline.
     */
    kicker: { type: 'string' },

    /**
     * The name of the NYT newsroom desk that was first assigned the NYT
     * content asset as defined in the CMS.
     */
    originatingDesk: { type: 'string' },

    /**
     * he short name used internally by the newsroom to indicate the content of
     * a story and name an asset while it is in production. This data is not
     * intended to be exposed or relied upon for public facing-purposes.
     */
    slug: { type: 'string' },

    /**
     * The current number of characters in the context asset's body text
     */
    characterCount: { type: 'number' },

    /**
     * Number of words in content asset's body text.
     */
    wordCount: { type: 'number' },
  },
};
