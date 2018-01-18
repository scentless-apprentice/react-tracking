/**
 * Pageview specific data.
 */
module.exports = {
  description: 'Describes basic attributes of the NYT user.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    /**
     * The unique ID of the pageview.
     */
    id: {
      type: 'string',
      description: 'The ID for a given page - most useful for tracking advertising impressions',
    },

    /**
     * Client-side, real-user performance metrics that we want to track. Note that in the
     * "description", the calculations are based on the `performance` object available via
     * the Navigation Timing API: https://www.w3.org/TR/navigation-timing/
     */
    performance: {
      properties: {
        /**
         * Time until the DOM is interactive and the user can start scrolling
         */
        domInteractive: {
          type: 'number',
          description:
            'Total DOM interactive time (in ms), as calculated by timing.domInteractive - timing.navigationStart',
        },
        /**
         * Time until the load event fires for the DOM
         */
        pageLoadTime: {
          type: 'number',
          description:
            'Total page load time (in ms), as calculated by timing.loadEventEnd - timing.navigationStart',
        },
        /**
         * Time until the DOM content loads
         */
        domContentLoaded: {
          type: 'number',
          description:
            'Total page load time (in ms), as calculated by timing.domContentLoadedEventEnd - timing.navigationStart',
        },
        /**
         * Time until the browser starts requesting the current document from the server
         */
        requestStart: {
          type: 'number',
          description:
            'Time until the browser starts requesting the current document from the server (in ms), as calculated by timing.requestStart - timing.navigationStart',
        },
        /**
         * Time until the first byte of the response from the server (TTFB)
         */
        responseStart: {
          type: 'number',
          description:
            'Time until the first byte of the response from the server (in ms), as calculated by timing.responseStart - timing.navigationStart',
        },
      },
    },
    ad: {
      description: 'ad slot behavior and performance tracking',
      properties: {
        slotId: {
          type: 'string',
          description: 'Id of ad container',
        },
        position: {
          type: 'string',
          description: 'position of ad container',
        },
        pageViewId: {
          type: 'string',
          description: 'Unique id for page view session',
        },
        creativeId: {
          type: 'string',
          description: 'Id of the ad creative',
        },
        lineItemId: {
          type: 'string',
          description: 'Id of the line item for the ad',
        },
        isEmpty: {
          type: 'boolean',
          description: 'Flag for when the ad server returned an ad',
        },
        timeDefined: {
          type: 'number',
          description: 'Time from responseStart until ad defined',
        },
        timeCalled: {
          type: 'number',
          description: 'Time from responseStart until ad called',
        },
        timeRendered: {
          type: 'number',
          description: 'Time from responseStart until ad rendered',
        },
        timeViewed: {
          type: 'number',
          description: 'Time from responseStart until ad was viewed',
        },
      },
    },
    heartbeat: {
      description: 'TBD',
      properties: {
        /**
         * The time elapsed, in milliseconds, since the `pageDataReady` event was emitted.
         * */
        timeSincePageDataReady: {
          type: 'integer',
          description:
            'The time elapsed, in milliseconds, since the `pageDataReady` event was emitted.',
        },

        /**
         * The frequency of `heartbeat` event object pushes, in milliseconds.
         */
        heartbeatInterval: {
          type: 'integer',
          description: 'The frequency of heartbeat event object pushes, in milliseconds.',
        },
      },
    },
  }, // end pageview.properties
};
