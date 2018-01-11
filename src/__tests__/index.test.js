/* eslint-disable global-require */
const example = require('../example');

describe('index', () => {
  describe('in development', () => {
    let validator;
    beforeAll(() => {
      jest.resetModules();
      global.process.env.NODE_ENV = 'development';
      validator = require('../index').validator;
    });
    it('validates against example data', () => {
      const result = validator(example);

      expect(!result.errors).toBe(true, result.errors);
    });

    it('validates individual video event data', () => {
      const result = validator({ video: example.video }, { individualEvents: true });

      expect(!result.errors).toBe(true, result.errors);
    });
    it('validates individual card data', () => {
      const result = validator({ card: example.card }, { individualEvents: true });

      expect(!result.errors).toBe(true, result.errors);
    });
  });

  describe('in production', () => {
    let validator;
    beforeAll(() => {
      jest.resetModules();
      global.process.env.NODE_ENV = 'production';
      validator = require('../index').validator;
    });

    it('exports an empty function', () => {
      expect(validator()).toBe(undefined);
    });
  });
});
