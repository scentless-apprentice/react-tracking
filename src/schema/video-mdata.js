/**
 * Contains data pertaining to video mdata assets.
 */
module.exports = {
  additionalProperties: true,

  properties: {
    device: {
      enum: ['desktop', 'mobile'],
    },

    playerMode: {
      type: 'string',
    },

    playerType: {
      type: 'string',
    },

    playerUsage: {
      type: 'string',
    },

    playerVersion: {
      type: 'string',
    },

    tech: {
      type: 'string',
    },

    videoDeliveryMethod: {
      enum: ['vod', 'live'],
    },

    // duration in seconds
    videoDuration: {
      type: 'number',
    },

    // series
    videoFranchise: {
      type: 'string',
    },

    // headline
    videoName: {
      type: 'string',
    },

    // scoop playlist
    videoPrimaryPlaylistId: {
      type: 'number',
    },

    videoPrimaryPlaylistName: {
      type: 'string',
    },

    // section
    videoSection: {
      type: 'string',
    },

    // subsection
    videoSubSection: {
      type: 'string',
    },

    // timecode of event
    videoTimeOfEvent: {
      type: 'number',
    },

    // video || ad || 360video
    videoType: {
      enum: ['video', 'ad', '360video'],
    },
  },
};
