/**
* Application specific data.
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `application`)
  required: ['dlVersion', 'environment', 'name'],

  // properties for `application`
  properties: {

    /**
     * Version number of the tracking schema.
     * This number is updated with each release of `nytm/tracking-schema`
     */
     // TODO: This should be a semver REGEX
    dlVersion: { type: 'string' }, // semver

    /**
     * Version of app (or githash)
     */
    releaseVersion: { type: 'string' },

    /**
     * Timestamp of when the app was released.
     */
    releaseDate: { format: 'date-time' },

    /**
     * The timestamp value that indicates when the page was rendered by the server.
     * NOTE: Recommended to omit and rely on gtm.js which is a timestamp of GTM loading.
     * This value can be used to compute time-bound events for analysis like heartbeat, etc.
     */
    renderTimestamp: { format: 'date-time' },

    /**
     * Environment app is running in.
     */
    environment: {
      enum: ['production', 'staging', 'local', 'test', 'dev', 'qa'],
    },

    /**
     * Name of the app
     */
    name: { type: 'string' },

  }, // end application.properties
};
