function segment(valid, formatted) {
  return valid ? formatted : '';
}

function specialDataTypes(schemaObject) {
  const {type, items, properties} = schemaObject;
  if (properties) return 'object';
  if (items) return `array of ${items.type}`;
  if (schemaObject.enum) return `must match \n* ${schemaObject.enum.join('\n* ')}`;
  return type || '';
}

function getSpecialDescription({ items = {} }) {
  return items.description || 'No description found';
}

function buildSchemaChunk(schemaData, propName = '', parentName = '') {
  const propNameSpace = [parentName, propName].filter((str)=> !!str).join('.');
  const {
    description = getSpecialDescription(schemaData),
    type = specialDataTypes(schemaData),
    format,
    required = [],
    additionalProperties,
    properties
  } = schemaData;

  console.log(`Documenting ${propNameSpace}`);

  return [
    // title
    `### ${propNameSpace}`,
    // description
    segment(description, `  Description: ${description}`),
    // data type
    segment(type, `  Data Type: ${type}`),
    // data format
    segment(format, `  Data format: ${format}`),
    // require fields
    segment(required.length, `  Required Fields: ${required.join(', ')}`),
    // additional properties
    segment(properties && additionalProperties, `  Accepts Additional Properties: ${!!additionalProperties}`),
    // sub properties
    chunkProperties(properties, propNameSpace),
    // filter out all the empty strings and joing with new lines
  ].filter((str)=> !!str).join('\n\n');
}

function chunkProperties(properties = [], parentName = '') {
  return Object.keys(properties).map((prop, key)=>  {
    return buildSchemaChunk(properties[prop], prop, parentName);
  }).join('\n\n');
}


module.exports = function schemaGenerator(options, { schemaData } = scope) {
  return buildSchemaChunk(schemaData, 'datalayer');
}
