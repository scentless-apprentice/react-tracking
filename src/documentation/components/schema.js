'use strict';

const core = require('./core');

const generator = {
  generate: function(schemaData, propName = '', parentName = '') {
    const propNameSpace = core.concactNameSpace(parentName, propName);
    
    core.log(propNameSpace);
    
    const {
      description = core.getSpecialDescription(schemaData),
      required = [],
      format,
      additionalProperties,
      properties
    } = schemaData;
    
    const type = core.buildDataType(schemaData);

    return [
      // title      
      core.buildSegnment(propNameSpace, `### ${propNameSpace}`),
      // description
      core.buildSegnment(description, `Description: ${description}`),
      // data type
      core.buildSegnment(type, `Data Type: ${type}`),
      // data format
      core.buildSegnment(format, `Data format: ${format}`),
      // require fields
      core.buildSegnment(required.length, `Required Fields: ${required.join(', ')}`),
      // additional properties
      core.buildSegnment(properties && additionalProperties, `Accepts Additional Properties: ${!!additionalProperties}`),
      // sub properties
      this.buildPropertiesSegment(properties, propNameSpace),
      // filter out all the empty strings and joing with new lines
    ].filter((str)=> !!str).join('\n\n');
  },

  buildPropertiesSegment: function(properties = [], parentName = '') {
    return Object.keys(properties).map((prop, key)=>  {
      return this.generate(properties[prop], prop, parentName);
    }).join('\n\n');
  },

  init: function(schemaData) { return this.generate(schemaData, 'datalayer'); }
};

module.exports = function schemaGenerator(options, { schemaData } = scope) {
  return generator.init(schemaData);
}
