'use strict';

/**
 * Tracking Data schema, based off:
 * https://docs.google.com/document/d/1o0zbXibJlqmqk9ScYZGx0iq4jZ6IR8H_OdLU-8gZRlI/edit
 *
 * Schema definition semantics available at:
 * https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
 */

var event = require('./event');
var application = require('./application');
var user = require('./user');
var referrer = require('./referrer');
var interaction = require('./interaction');
var asset = require('./asset');
var presentation = require('./presentation');
var marketing = require('./marketing');
var viewport = require('./viewport');
var session = require('./session');
var video = require('./video');
var heartbeat = require('./heartbeat');

var allProps = { // main "dataLayer" starts here
  event: event,
  application: application,
  user: user,
  referrer: referrer,
  interaction: interaction,
  asset: asset,
  presentation: presentation,
  marketing: marketing,
  viewport: viewport,
  video: video,
  heartbeat: heartbeat,

  // TODO: this is mostly empty
  session: session

};

module.exports = {

  get: function get(individualEvents) {

    var schema = {
      additionalProperties: false,
      // top-level properties
      properties: allProps
    };

    if (!individualEvents) {
      // required top-level properties
      schema.required = ['event', 'application', 'user', 'referrer'];
    }

    return schema;
  }

};