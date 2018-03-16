'use strict';

/**
 * Tracking Data schema, based off:
 * https://docs.google.com/document/d/1o0zbXibJlqmqk9ScYZGx0iq4jZ6IR8H_OdLU-8gZRlI/edit
 *
 * Schema definition semantics available at:
 * https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
 */

var application = require('./application');
var asset = require('./asset');
var block = require('./block');
var card = require('./card');
var event = require('./event');
var eventData = require('./eventData');
var interaction = require('./interaction');
var marketing = require('./marketing');
var newsletter = require('./newsletter');
var pageModule = require('./module'); // to avoid overlap with reserved word 'module'
var pageview = require('./pageview'); // to avoid overlap with reserved word 'module'
var presentation = require('./presentation');
var realestate = require('./realestate');
var referrer = require('./referrer');
var session = require('./session');
var user = require('./user');
var viewport = require('./viewport');
var video = require('./video');
var version = require('./version');

var allProps = {
  // main "dataLayer" starts here
  application: application,
  asset: asset,
  block: block,
  card: card,
  event: event,
  eventData: eventData,
  interaction: interaction,
  marketing: marketing,
  module: pageModule,
  newsletter: newsletter,
  pageview: pageview,
  presentation: presentation,
  realestate: realestate,
  referrer: referrer,
  session: session, // TODO: this is mostly empty
  user: user,
  version: version,
  viewport: viewport,
  video: video,
};

module.exports = {
  get: function get(individualEvents) {
    var schema = {
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
