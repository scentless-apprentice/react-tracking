/* eslint-disable no-console */
const _ = require('lodash');
const Ajv = require('ajv');
const schemaGenerator = require('./schema');
const logger = require('./utils/logger');
const ajv = new Ajv({
  allErrors: true,
});

const getValidator = (individualEvents) => {
  const schema = schemaGenerator.get(individualEvents);
  const validator = ajv.compile(schema);
  return validator;
}

const validation = (data, individualEvents) => {
  const validate = getValidator(individualEvents);

  validate.isValid = validate(data); // returns a boolean for convinience

  logger.error(validate.errors);

  return validate; // validate.errors contains the errors list
}


module.exports = ({ data = {}, individualEvents = false } = {}) => {

  if (!_.size(data)) {
    let error = logger.emptyDataError;
    logger.error(error);

    return error;
  }

  return validation(data, individualEvents);
};
