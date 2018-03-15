/**
 * Module specific data.
 */
module.exports = {
  description: 'Describes attributes of a module on the page',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    /**
     * The name of the module interacted with.
     * E.g. "see more"
     */
    name: {
      type: 'string',
      description: 'The name of the module interacted with. Also used as GA Event Category',
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

    // Region to be defined
    region: {
      properties: {},
    },

    /**
     * Module element
     * Specific link or tool interacted with in the module
     */
    element: {
      type: 'object',
      description: 'Specific link or tool interacted with in the module',
      properties: {
        name: {
          type: 'string',
          description: 'Permanent value / slug / id. Also used as the GA Event Action',
        },

        /**
         * URL of an asset associated with the link
         */
        url: {
          type: 'string',
          description: 'URL associated with the element, eg. article being shared or linked to',
        },

        /**
         * The text or displayed to the user for this element
         */
        label: {
          type: 'string',
          description: 'Text displayed to the user for this element.  Also used as GA Event Label.',
        },
      },
    },
    /**
     * ga - Optional
     * Values specified here will override the default values derived from the module data
     */
    ga: {
      type: 'object',
      description: 'Optionally override default values for GA Event Tracking',
      properties: {
        eventCategory: {
          type: 'string',
          description: 'Sets the event category for GA event overriding the default module.name',
        },
        eventAction: {
          type: 'string',
          description:
            'Sets the event action for GA event overriding the default module.element.name',
        },
        eventLabel: {
          type: 'string',
          description:
            'Sets the event label for GA event overriding the default module.element.label',
        },
        eventValue: {
          type: 'string',
          description: 'Sets the event value for GA event',
        },
        customMetrics: {
          type: 'array',
          description:
            'Array of objects in the format ```{"index": 123, "value": 1 }``` where *index* is the integer index of the custom metric and *value* is the value to set',
        },
        customDimensions: {
          type: 'array',
          description:
            'Array of objects in the format ```{"index": 1, "value": "http://www.nytimes.com/" }``` where *index* is the integer index of the custom dimension and *value* is the value to set',
        },
      },
    },
  }, // end module.properties
};
