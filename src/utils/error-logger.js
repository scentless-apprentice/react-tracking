module.exports = errors => {
  // TODO: this needs to log errors to some monitoring system
  if (errors) {
    console.dir(errors);
    console.log('\n🚫 Example data is invalid 🚫');
    // console.dir(validate.errors);
    errors.forEach((e) => {
      console.log(` 👉 ${e.keyword}${e.dataPath} ${e.message}`);
    });
  }
};