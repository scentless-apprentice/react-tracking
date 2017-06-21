'use strict';

/**
* Describes attributes of the heartbeat event object.
*/
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `heartbeat`)
  required: ['timeSincePageDataReady', 'heartbeatInterval'],

  description: 'This event should fire every n seconds where n varies by application and page type. This event push new heartbeat values into the dataLayer.',

  properties: {

    /**
     * The time elapsed, in milliseconds, since the `pageDataReady` event was emitted.
    **/
    timeSincePageDataReady: {
      type: 'integer',
      description: 'The time elapsed, in milliseconds, since the `pageDataReady` event was emitted.'
    },

    /**
     * The frequency of `heartbeat` event object pushes, in milliseconds.
     */
    heartbeatInterval: {
      type: 'integer',
      description: 'The frequency of heartbeat event object pushes, in milliseconds.'
    }
  }
};