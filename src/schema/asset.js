/**
 * Describes attributes of the NYT content asset.
 */
module.exports = {
  description: 'Describes attributes of NYT content assets. For example,',

  properties: {
    /**
     * The canonical URL of the NYT content asset.
     * Can be omitted for certain "embedded-only" content types
     * like “image slideshow” and some “interactive graphics” assets.
     */
    url: {
      format: 'uri',
      description:
        'The canonical URL of the NYT content asset. This value is null for certain "embedded-only" content types like “image slideshow” and some “interactive graphics” assets.',
    },

    /**
     * The NYT content asset's public-facing label for site navigation
     * that is meant to reflect a core, permanent category of the
     * NYT report.
     */
    section: {
      type: 'string',
      description:
        "The NYT content asset's public-facing label for site navigation that is meant to reflect a core, permanent category of the NYT report.",
    },

    /**
     * The NYT content asset's public-facing label for site navigation that
     * sits hierarchically under a section and is meant to reflect a core,
     * permanent category of the NYT report.
     */
    subSection: {
      type: 'string',
      description:
        "The NYT content asset's public-facing label for site navigation that sits hierarchically under a section and is meant to reflect a core, permanent category of the NYT report.",
    },

    /**
     * Public-facing headline.
     */
    headline: {
      type: 'string',
      description: "The NYT content asset's public-facing title",
    },

    /**
     * The list of authors of the NYT content asset, usually joined together
     * with commas and a final "and" to form a byline. Ordinality is important
     * within the newsroom, and generally, authors are ranked in descending
     * order of their contributions to the content or so that the author
     * present in the location where the news events transpired is listed first.
     */
    // FIXME: (JG) I set this as an Array type, but the Google Doc suggests
    //        manually joining the authors, which I'd like to avoid.
    authors: {
      items: {
        type: 'string',
        description:
          'The list of authors of the NYT content asset, usually joined together with commas and a final "and" to form a byline. Ordinality is important within the newsroom, and generally, authors are ranked in descending order of their contributions to the content or so that the author present in the location where the news events transpired is listed first.',
      },
    },

    /**
     * SCOOP id.
     */
    id: {
      type: ['string', 'number'],
      description: 'The unique ID of the NYT content asset',
    },

    /**
     * UNIX timestamp value that indicates when this asset was first digitally
     * published.
     */
    publishedTimestamp: {
      format: 'date-time',
      description:
        'The UNIX timestamp value that indicates when the NYT content asset was first digitally published.',
    },

    /**
     * UNIX timestamp when the asset was last modified.
     */
    lastUpdatedTimestamp: {
      format: 'date-time',
      description:
        'The UNIX date-time value that indicates when an NYT digital content asset was last modified or re-published via the CMS.',
    },

    /**
     * The name of the NYT content asset collection. A collection is a grouping
     * of two or more NYT content assets collected together based on
     * journalistic intent.
     */
    collectionName: {
      type: 'array',
      description:
        'The name of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.',
    },

    /**
     * The type of collection.
     */
    collectionType: {
      description:
        'The type of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.',
      type: 'array',
    },

    /**
     * The name of the NYT newsroom team that is the current owner of the asset.
     */
    desk: {
      type: 'string',
      description:
        'The name of the NYT newsroom team that is the current owner of the NYT content asset as defined in the CMS.',
    },

    /**
     * Public-facing label, typically appears before the headline.
     */
    kicker: {
      type: 'string',
      description:
        'An optional label intended to be displayed before the headline, generally in smaller type, signifying a type of content.',
    },

    /**
     * The name of the NYT newsroom desk that was first assigned the NYT
     * content asset as defined in the CMS.
     */
    originatingDesk: {
      type: 'string',
      description:
        'The name of the NYT newsroom desk that was first assigned the NYT content asset as defined in the CMS.',
    },

    /**
     * he short name used internally by the newsroom to indicate the content of
     * a story and name an asset while it is in production. This data is not
     * intended to be exposed or relied upon for public facing-purposes.
     */
    slug: {
      type: 'string',
      description:
        'The short name used internally by the newsroom to indicate the content of a story and name an asset while it is in production.This data is not  intended to be exposed or relied upon for public facing-purposes.',
    },

    /**
     * The current number of characters in the context asset's body text
     */
    characterCount: {
      type: 'number',
      description: "The current number of characters in the context asset's body text",
    },

    /**
     * Number of words in content asset's body text.
     */
    wordCount: {
      type: 'number',
      description: "The current number of words in the content asset's body text.",
    },

    orgFacets: {
      type: 'array',
      description: '???',
    },

    desFacets: {
      type: 'array',
      description: '????',
    },

    geoFacets: {
      type: 'array',
      description: '???',
    },

    storyElements: {
      type: 'array',
      description: '???',
    },

    commentsDisplayed: {
      type: 'boolean',
      description: 'True if comments are displayed',
    },

    commentsActive: {
      type: 'boolean',
      description: 'True if comments are ???',
    },

    commentsEnabled: {
      type: 'boolean',
      description: 'True if comments are enabled',
    },

    newsSource: {
      type: 'string',
      description: '??',
    },

    contentTone: {
      type: 'string', // TODO: prob should be enum
      descrition: '?',
    },

    originalDesk: {
      type: 'string',
      description: '?',
    },

    printPage: {
      type: 'string',
      description: '?',
    },

    printSection: {
      type: 'string',
      description: '?',
    },

    publishDatePrint: {
      format: 'date-time',
      description: '?',
    },

    publishedDate: {
      format: 'date-time',
      description: '?',
    },

    publishedTimeStamp: {
      format: 'date-time',
      description: '?',
    },

    source: {
      type: 'string',
      description: '?',
    },

    type: {
      type: 'string',
      description: '?',
    },

    typeOfMaterial: {
      type: 'string',
      description: '?',
    },

    language: {
      type: 'string',
      description: '?',
    },

    derivedDesk: {
      type: 'string',
      description: '?',
    },

    gaParams: {
      type: 'object',
      description: '?',
    },

    storyPatterns: {
      type: 'array',
      description: '?',
    },

    ad: {
      properties: {
        capacity: {
          type: 'number',
        },
        threshold: {
          type: 'number',
        },
        stride: {
          type: 'number',
        },
      },
    },

    is_refresh: {
      type: 'boolean',
      description: '?',
    },

    perFacets: {
      type: 'array',
      description: '?',
    },

    headerType: {
      type: 'string',
      description:
        'The type of header used on a piece of content (e.g., legacy headers on Scoop articles)',
    },
  },
};
