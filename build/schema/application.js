'use strict';

/**
 * Application specific data.
 */
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  description:
    "Describes basics attributes of the NYT Web application where the data layer is constructed. For example, it provides the application's version and release number.",

  // properties that are required (for `application`)
  required: ['dlVersion', 'environment', 'name'],

  // properties for `application`
  properties: {
    /**
     * Version number of the tracking schema.
     * This number is updated with each release of `nytm/tracking-schema`
     */
    // TODO: This should be a semver REGEX
    dlVersion: {
      type: 'string',
      description:
        'The version number of the data layer; this value is updated with each release of the data layer.',
    }, // semver

    /**
     * Version of app (or githash)
     */
    releaseVersion: {
      type: 'string',
      description: 'The version number of the application.',
    },

    /**
     * Timestamp of when the app was released.
     */
    releaseDate: {
      format: 'date-time',
      description: 'The timestamp value that indicates when the application version was released.',
    },

    /**
     * The timestamp value that indicates when the page was rendered by the server.
     * NOTE: Recommended to omit and rely on gtm.js which is a timestamp of GTM loading.
     * This value can be used to compute time-bound events for analysis like heartbeat, etc.
     */
    renderTimestamp: {
      format: 'date-time',
      description:
        'The timestamp value that indicates when the page was rendered by the server. Note: Instead, omit and rely on gtm.js which is a timestamp of GTM loading. This value can be used to compute time-bound events for analyses like heartbeat, etc.',
    },

    /**
     * Environment app is running in.
     */
    environment: {
      enum: ['production', 'staging', 'local', 'test', 'dev', 'qa'],
      description: 'A value that indicates the location or status of the application.',
    },

    /**
     * Name of the app
     */
    name: {
      type: 'string',
      description: 'The name of the application where the data was collected.',
    },
  }, // end application.properties
};
