'use strict';

var Ajv = require('ajv');
var schemaModel = require('../development').schemaModel;

var ajv = new Ajv({
  allErrors: true
});

describe('schema', function () {
  it('is valid', function () {
    expect(ajv.compile(schemaModel)).not.toThrow();
    expect(ajv.validateSchema(schemaModel)).toBe(true);
  });
});