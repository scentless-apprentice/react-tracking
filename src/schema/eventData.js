/**
* Event-related metadata
*/
module.exports = {
  description: 'Describes metadata related to a specific event',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {

    type: {
      type: 'string',
      description: 'type of interaction: click, submit, swipe...',
    },

    success: {
      type: 'boolean',
      description: 'Indicates whether the attempted action was successful. Default will be true. May be false in the case of a failed newsletter sign-up attempt, for example',
    },

    trigger: {
      type: 'string',
      description: 'The front-end component that triggered the event push - e.g., a card',
    },

    pagetype: {
      type: 'string',
      description: 'pagetype when the interaction occurred',
    },

    timeRendered: {
      type: 'number',
      description: 'Time from responseStart until module is rendered',
    },

    timeViewed: {
      type: 'number',
      description: 'Time from responseStart until module was viewed',
    },

  }, // end pageview.properties
};
