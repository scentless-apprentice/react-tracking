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
      `### ${propNameSpace}`,
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
      core.buildPropertiesSegment(properties, propNameSpace, generator.generate),
      // filter out all the empty strings and joing with new lines
    ].filter((str)=> !!str).join('\n\n');
  },

  init: function(schemaData) { return this.generate(schemaData, 'datalayer'); }
};

module.exports = function schemaGenerator(options, { schemaData } = scope) {
  return generator.init(schemaData);
}
