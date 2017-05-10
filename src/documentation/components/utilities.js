module.exports = {
  specialDataTypes: function(schemaObject) {
    const {type, items, properties} = schemaObject;
    if (properties) return this.dataTypeLabel('object');
    if (items) return this.dataTypeLabel(`array of ${items.type}s`);
    if (schemaObject.enum) return this.handleEnum(schemaObject.enum);
    return '';
  },

  handleEnum: function(_enum) {
    if (_enum) {
      return `${this.dataTypeLabel(typeof _enum[0])}. It must match one of these:\n* ${_enum.join('\n* ')}`;
    }
  },

  capitalize: function(dataType){
    return dataType[0].toUpperCase() + dataType.slice(1, dataType.lenth);
  },

  capitalizeSentence: function(str){
    return str.split(' ').map((word) => word.length > 2 ? this.capitalize(word) : word).join(' ');
  },

  dataTypeLabel: function(label) {
    return `**${ this.capitalizeSentence(label) }**`;
  },
};