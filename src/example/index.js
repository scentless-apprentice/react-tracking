module.exports = {
  event: 'heartbeat',

  application: {
    dlVersion: '1.0.1',
    releaseVersion: '1.0.0',
    releaseDate: Date.now(),
    environment: 'dev',
    name: 'test-app',
  },

  user: {
    type: 'regi',
    activeBundles: ['a', 'b'],
  },

  referrer: {
    url: 'http://example.com',
  },
};
