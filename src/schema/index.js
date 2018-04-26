/**
 * Tracking Data schema, based off:
 * https://docs.google.com/document/d/1o0zbXibJlqmqk9ScYZGx0iq4jZ6IR8H_OdLU-8gZRlI/edit
 *
 * Schema definition semantics available at:
 * https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
 */

const abtest = require('./abtest');
const application = require('./application');
const asset = require('./asset');
const block = require('./block');
const card = require('./card');
const event = require('./event');
const eventData = require('./eventData');
const interaction = require('./interaction');
const marketing = require('./marketing');
const newsletter = require('./newsletter');
const pageModule = require('./module'); // to avoid overlap with reserved word 'module'
const pageview = require('./pageview'); // to avoid overlap with reserved word 'module'
const presentation = require('./presentation');
const realestate = require('./realestate');
const referrer = require('./referrer');
const session = require('./session');
const slideshow = require('./slideshow');
const user = require('./user');
const viewport = require('./viewport');
const video = require('./video');
const version = require('./version');

const allProps = {
  // main "dataLayer" starts here
  abtest,
  application,
  asset,
  block,
  card,
  event,
  eventData,
  interaction,
  marketing,
  module: pageModule,
  newsletter,
  pageview,
  presentation,
  realestate,
  referrer,
  session, // TODO: this is mostly empty
  slideshow,
  user,
  version,
  viewport,
  video,
};

module.exports = {
  get: individualEvents => {
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
