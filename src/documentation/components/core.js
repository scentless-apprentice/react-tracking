'use strict';

const utilities = require('./utilities');

module.exports = {
  concactNameSpace: function(...pieces) {
    return pieces.filter((str)=>!!str).join('.');
  },

  log: function(propNameSpace) {
    console.log(`Documenting ${propNameSpace}`);
  },

  getSpecialDescription: function({ items = {} }) {
    return items.description || 'No description found';
  },

  buildDataType: function(schemaData) {
    if (schemaData.type) return utilities.dataTypeLabel(schemaData.type);

    return utilities.specialDataTypes(schemaData);
  },

  buildSegnment: function (valid, formatted) {
    return valid ? formatted : '';
  },

  buildPropertiesSegment: function(properties = [], parentName = '', cb) {
    return Object.keys(properties).map((prop, key)=>  {
      return cb(properties[prop], prop, parentName);
    }).join('\n\n');
  },
}