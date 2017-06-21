'use strict';

/* eslint-disable global-require */
var example = require('../example');

describe('index', function () {
  describe('in development', function () {
    var validator = void 0;
    beforeAll(function () {
      jest.resetModules();
      global.process.env.NODE_ENV = 'development';
      validator = require('../index').validator;
    });
    it('validates against example data', function () {
      var result = validator(example);

      expect(!result.errors).toBe(true, result.errors);
    });

    it('validates individual video event data', function () {
      var result = validator({ video: example.video }, { individualEvents: true });

      expect(!result.errors).toBe(true, result.errors);
    });
  });

  describe('in production', function () {
    var validator = void 0;
    beforeAll(function () {
      jest.resetModules();
      global.process.env.NODE_ENV = 'production';
      validator = require('../index').validator;
    });

    it('exports an empty function', function () {
      expect(validator()).toBe(undefined);
    });
  });
});