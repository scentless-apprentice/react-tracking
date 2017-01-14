/* eslint-disable no-console */
const Ajv = require('ajv');
const schema = require('../schema');
const example = require('../example');

const ajv = new Ajv({
  allErrors: true,
});

describe('schema', () => {
  it('is valid', () => {
    expect(ajv.compile(schema)).not.toThrow();
    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it('validates against example data', () => {
    const validate = ajv.compile(schema);
    const isValid = validate(example);
    if (validate.errors) {
      console.dir(validate.errors);
      console.log('\n🚫 Example data is invalid 🚫');
      // console.dir(validate.errors);
      validate.errors.forEach((e) => {
        console.log(` 👉 ${e.keyword}${e.dataPath} ${e.message}`);
      });
    }
    expect(isValid).toBe(true, validate.errors);
    // expect(validate.errors).toBeUndefined();
  });
});
