/* eslint-disable no-console */
const Ajv = require('ajv');
const schema = require('./schema');


module.exports = (function () {
  const ajv = new Ajv({
    allErrors: true,
  });
  const validate = ajv.compile(schema);    

  const logErrors = errors => {
    // TODO: this needs to log errors to some monitoring system
    if (errors) {
      console.dir(errors);
      console.log('\n🚫 Example data is invalid 🚫');
      // console.dir(validate.errors);
      errors.forEach((e) => {
        console.log(` 👉 ${e.keyword}${e.dataPath} ${e.message}`);
      });
    }
  }

  // TK TK
  return {
    validate: function(dlEntry) {
      const isValid = validate(dlEntry);

      logErrors(validate.errors);

      return validate.errors;
    }
  }
})();
