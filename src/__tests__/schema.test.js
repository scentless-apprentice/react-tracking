/* eslint-disable no-console */
const Ajv = require('ajv');
const schema = require('../schema');
const ajv = new Ajv({
  allErrors: true,
});

describe('schema', () => {
  it('is valid', () => {
    expect(ajv.compile(schema)).not.toThrow();
    expect(ajv.validateSchema(schema)).toBe(true);
  });
});
