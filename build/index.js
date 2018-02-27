'use strict';

/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production');
} else {
  module.exports = require('./development');
}

module.exports.version = '2.5.0';
