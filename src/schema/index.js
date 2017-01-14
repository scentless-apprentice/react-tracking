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

module.exports = {

  // This disallows properties not explicitly listed
  additionalProperties: false,

  // required top-level properties
  required: ['event', 'application', 'user', 'referrer'],

  // top-level properties
  properties: { // main "dataLayer" starts here
    event,
    application,
    user,
    referrer,
    interaction,
    asset,
    presentation,

    // TODO: These are mostly empty
    marketing,
    viewport,
    session,
    video,
  },
};
