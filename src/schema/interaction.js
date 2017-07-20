'use strict';

/**
 * Interaction specific data.
 */
module.exports = {
  'description': 'Describes attributes of the interaction.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    dfp_page_view_id: {
      type: 'string',
      description: '????'
    }
  } // end interaction.properties
};