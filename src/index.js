/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production');
} else {
  module.exports = require('./development');
}

module.exports.version = preval`
  const pkg = require('../package.json');
  module.exports = pkg.version;
`;
