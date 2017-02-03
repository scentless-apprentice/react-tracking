/**
 * Contains data pertaining to video assets.
 */
module.exports = {
  // disallow properties not explicilty listed
  additionalProperties: false,

  // properties that are required (for `video`)
  required: ['contentId'],

  properties: {

    action: {
      type: 'string'
    },

    region: {
      type: 'string'
    },

    state: {
      enum: ['player', 'paused']
    },

    // section
    contentCollection: {
      type: 'string'
    },

    // scoop id
    contentId: {
      type: 'number'
    },

    //auto-play-start, user-play, etc...
    eventName: {
      type: 'string'
    },

    //timestamp
    eventTimestamp: {
      format: 'date-time'
    },

    module: {
      type: 'string'
    },

    //player type string
    version: {
      type: 'string'
    },

    mData: {
      additionalProperties: false,

      properties: {
        Device: {
          enum: ['desktop', 'mobile']
        },

        playerMode: {
          type: 'string'
        },

        playerType: {
          type: 'string'
        },

        playerUsage: {
          type: 'string'
        },

        playerVersion: {
          type: 'string'
        },

        tech: {
          type: 'string'
        },

        videoDeliveryMethod: {
          enum: ['vod', 'live']
        },

        // duration in seconds
        videoDuration: {
          type: 'number'
        },

        // series
        videoFranchise: {
          type: 'string'
        },

        // headline
        videoName: {
          type: 'string'
        },

        // scoop playlist
        videoPrimaryPlaylistId: {
          type: 'number'
        },

        videoPrimaryPlaylistName: {
          type: 'string'
        },

        // section
        videoSection: {
          type: 'string'
        },

        // subsection
        videoSubSection: {
          type: 'string'
        },

        // timecode of event
        videoTimeOfEvent: {
          type: 'number'
        },

        // video || ad || 360video
        videoType: {
          enum: ['video', 'ad', '360video']
        },
      }      
    }
  }
};
