'use strict';

/* eslint-disable no-console */
var Ajv = require('ajv');
var schemaGenerator = require('./schema');
var logger = require('./utils/logger');

var ajv = new Ajv({
  allErrors: true,
});

var getValidator = function getValidator(individualEvents) {
  var schema = schemaGenerator.get(individualEvents);
  var validator = ajv.compile(schema);
  return validator;
};

var validation = function validation(data, individualEvents) {
  var validate = getValidator(individualEvents);

  validate.isValid = validate(data); // returns a boolean for convinience

  logger.error(validate.errors, function() {
    return console.log(data);
  });

  return validate; // validate.errors contains the errors list
};

module.exports = function() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Object.keys(data).length) {
    var error = logger.emptyDataError;
    logger.error(error, function() {
      console.log(data);

      if (console.groupCollapsed) {
        console.groupCollapsed('Expand to view stack trace');
        console.trace();
        console.groupEnd();
      }
    });

    return error;
  }

  return validation(data, options.individualEvents);
};
