const segmentTypes = {
  schemaChunk: function schemaChunk(schemaData, propName = '', parentName = '') {
    const propNameSpace = [parentName, propName].filter((str)=> !!str).join('.');

    console.log(`Documenting ${propNameSpace}`);

    return [
      `### ${propNameSpace}`,
      segmentTypes.description(schemaData.description),
      segmentTypes.dataType(schemaData.type),
      segmentTypes.required(schemaData.required),
      segmentTypes.additionalProperties(schemaData.properties && schemaData.additionalProperties),
      segmentTypes.properties(schemaData.properties, propNameSpace),
    ].filter((str)=> !!str).join('\n\n');
  },

  description: function(description){
    return description ?  `  Description: ${description}`: '';
  },

  dataType: function(type){
    return type ?  `  Data Type: ${type}`: '';
  },
  
  required: function(requireFields) {
    return requireFields ? `  Required Fields: ${requireFields.join(', ')}` : '';
  },

  additionalProperties: function(additionalProperties){
    return additionalProperties ? `  Accepts Additional Properties: ${!!additionalProperties}` : '';
  },

  properties: function(properties = [], parentName = '') {
    return Object.keys(properties).map((prop, key)=>  {
      return `${segmentTypes.schemaChunk(properties[prop], prop, parentName)}`;
    }).join('\n\n---\n\n');
  }  
};

module.exports = function schemaGenerator(options, scope) {
  return segmentTypes.schemaChunk(scope.schemaData, 'datalayer');
}