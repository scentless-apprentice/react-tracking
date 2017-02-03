/**
 * Tracking Data schema, based off:
 * https://docs.google.com/document/d/1o0zbXibJlqmqk9ScYZGx0iq4jZ6IR8H_OdLU-8gZRlI/edit
 *
 * Schema definition semantics available at:
 * https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
 */

const event = require('./event');
const application = require('./application');
const user = require('./user');
const referrer = require('./referrer');
const interaction = require('./interaction');
const asset = require('./asset');
const presentation = require('./presentation');
const marketing = require('./marketing');
const viewport = require('./viewport');
const session = require('./session');
const video = require('./video');


const allProps = { // main "dataLayer" starts here
  event,
  application,
  user,
  referrer,
  interaction,
  asset,
  presentation,
  marketing,
  viewport,

  // TODO: These are mostly empty
  session,
  video,
};

module.exports = {

  get: (individualEvents) => {

    const schema = {
      additionalProperties: false,
      // top-level properties
      properties: allProps,
    };

    if (!individualEvents) {
      // required top-level properties
      schema.required = ['event', 'application', 'user', 'referrer'];
    }

    return schema;
  },

};
