module.exports = {
  error: errors => {
    // TODO: this needs to log errors to some monitoring system
    if (errors) {
      console.log('\n🚫 data is invalid 🚫');
      // console.dir(validate.errors);
      errors.forEach((e) => {
        console.log(` 👉 ${e.keyword}${e.dataPath} ${e.message}`);
      });
    }
  },

  emptyDataError: [{
    keyword: 'required',
    message: 'DL data object is missing or empty'
  }]
};
