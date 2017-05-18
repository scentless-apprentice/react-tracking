/* eslint-disable no-console */
const Ajv = require('ajv');
const schemaModel = require('../index').schemaModel;

const ajv = new Ajv({
  allErrors: true,
});

describe('schema', () => {
  it('is valid', () => {
    expect(ajv.compile(schemaModel)).not.toThrow();
    expect(ajv.validateSchema(schemaModel)).toBe(true);
  });
});
