const mData = require('./video-mdata');
/**
 * Contains data pertaining to video assets.
 */
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `video`)
  required: ['contentId'],

  description: 'external documentation - video keys documented separately',

  properties: {
    action: {
      type: 'string',
    },

    region: {
      type: 'string',
    },

    state: {
      enum: ['player', 'paused'],
    },

    // section
    contentCollection: {
      type: 'string',
    },

    // scoop id
    contentId: {
      type: 'number',
    },

    // auto-play-start, user-play, etc...
    eventName: {
      type: 'string',
    },

    // timestamp
    eventTimestamp: {
      format: 'date-time',
    },

    module: {
      type: 'string',
    },

    // player type string
    version: {
      type: 'string',
    },

    mData,
  },
};
