

/* eslint-disable no-console */
const Ajv = require('ajv');
const schemaGenerator = require('./schema');
const logger = require('./utils/logger');

const ajv = new Ajv({
  allErrors: true,
});

const getValidator = function getValidator(individualEvents) {
  const schema = schemaGenerator.get(individualEvents);
  const validator = ajv.compile(schema);
  return validator;
};

const validation = function validation(data, individualEvents) {
  const validate = getValidator(individualEvents);

  validate.isValid = validate(data); // returns a boolean for convinience

  logger.error(validate.errors);

  return validate; // validate.errors contains the errors list
};

module.exports = function () {
  const data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Object.keys(data).length) {
    const error = logger.emptyDataError;
    logger.error(error, () => {
      console.log('Data: ', data);
    });

    return error;
  }

  return validation(data, options.individualEvents);
};
