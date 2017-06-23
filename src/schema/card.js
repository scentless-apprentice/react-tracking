/**
* Card specific data.
*/
module.exports = {
  'description': 'Describes basic attributes of the NYT user.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    /**
     * TO-DO: This is the ordinal rank of a card within a block, right? I.e., does not dictate visual order of a card in a block - e.g., at desktop viewports, a card with a higher index may appear "above" a card with a lower index in the same block due to multi-column design
     * PROVIDED BY: Vi platform
     */
    index: {
      type: 'integer',
      description: 'An integer representing the ordinal rank of a card within a block',
    },
    /**
     * NOTE: type should map to the keys in this object:
     * https://github.com/nytm/wf-project-vi/blob/master/src/shared/Card/index.js#L25
     * PROVIDED BY: Vi platform
     */
    type: {
      type: 'string',
      description: 'visual'
    },
    /**
     * The rendition on a card. Should capture any block-level overrides (e.g., packages)
     * that don't conform to the current whole/skim/headline rendition format
     * PROVIDED BY: Vi platform
     */
    rendition: {
      type: 'string',
      description: 'whole',
    },
    /**
     * PROVIDED BY: Samizdat data
     */
    url: {
      type: 'string',
      description: 'https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html',
    },
    /**
     * The primary user-facing label on the card - should be headline or summary.
     * If its the summary, then truncate at 150 chars
     * PROVIDED BY: Samizdat data
     * E.g. 'Trump fires Comey from FBI'
     */
    label: {
      type: 'string',
      description: 'headline'
    },
    /**
     * The scoop ID for the asset behind the card
     * PROVIDED BY: Samizdat data
     * E.g. '100000005090678'
     */
    id: {
      type: 'string',
      description: '100000005090678'
    },
  }, // end card.properties
};
