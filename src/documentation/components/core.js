const utilities = require('./utilities');

module.exports = {
  concactNameSpace(...pieces) {
    return pieces.filter(str => !!str).join('.');
  },

  log(propNameSpace) {
    console.log(`Documenting ${propNameSpace}`);
  },

  getSpecialDescription({ items = {} }) {
    return items.description || 'No description found';
  },

  buildDataType(schemaData) {
    if (schemaData.type) return utilities.dataTypeLabel(schemaData.type);

    return utilities.specialDataTypes(schemaData);
  },

  buildSegnment(valid, formatted) {
    return valid ? formatted : '';
  },
};
