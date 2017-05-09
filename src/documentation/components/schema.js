const segmentTypes = {
  schemaChunk: function schemaChunk(schemaData, propName = '', parentName = '') {
    const propNameSpace = [parentName, propName].filter((str)=> !!str).join('.');
    return [
      `### ${propNameSpace}`,
      `\tDescription: ${schemaData.description || ''}`,
      `${segmentTypes.required(schemaData.required)}`,
      `${segmentTypes.additionalProperties(schemaData.properties && schemaData.additionalProperties)}`,
      `${segmentTypes.properties(schemaData.properties, propNameSpace)}`,
    ].filter((str)=> !!str).join('\n\n');
  },
  
  required: function(requireFields) {
    return requireFields ? `\tRequired Fields: ${requireFields.join(', ')}` : '';
  },

  additionalProperties: function(additionalProperties){
    return additionalProperties ? `\tAccepts Additional Properties: ${!!additionalProperties}` : '';
  },

  properties: function(properties = [], parentName = '') {
    return Object.keys(properties).map((prop, key)=>  {
      return `${segmentTypes.schemaChunk(properties[prop], prop, parentName)}`;
    }).join('\n');
  }  
};

module.exports = function schemaGenerator(options, scope) {
  return segmentTypes.schemaChunk(scope.schemaData, 'datalayer');
}