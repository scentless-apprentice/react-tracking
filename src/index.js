/* eslint-disable no-console */
const _ = require('lodash');
const Ajv = require('ajv');
const schemaGenerator = require('./schema');
const logger = require('./utils/logger');
const ajv = new Ajv({
  allErrors: true,
});

const getValidate = (individualEvents) => {
  const schema = schemaGenerator.get(individualEvents);
  
  return ajv.compile(schema);
}

const validation = (data, individualEvents) => {
  const validate = getValidate(individualEvents);

  validate(data);

  logger.error(validate.errors);

  return validate.errors || [];
}


module.exports = ({ data = {}, individualEvents = false } = {}) => {

  if (!_.size(data)) {
    let error = logger.emptyDataError;
    logger.error(error);

    return error;
  }

  return validation(data, individualEvents);
};
