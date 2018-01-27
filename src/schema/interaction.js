/**
 * Interaction specific data.
 * NOTE: This top-level field is deprecated and will soon be removed. Please use `pageview.ad.pageViewId` instead.
 */
module.exports = {
  description: 'Describes basic attributes of the NYT user.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    /**
     * The unique ID of the pageview.
     */
    dfp_page_view_id: {
      type: 'string',
      description: 'The ID for a given page - most useful for tracking advertising impressions',
    },
  }, // end pageview.properties
};
