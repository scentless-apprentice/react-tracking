/* eslint-disable no-console */
const Ajv = require('ajv');
const schema = require('./schema');
const errorLogger = require('./utils/error-logger');
const ajv = new Ajv({
  allErrors: true,
});
const validate = ajv.compile(schema);

module.exports = example => {
  validate(example);

  errorLogger(validate.errors);

  return validate.errors;
};