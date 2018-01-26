module.exports = {
  specialDataTypes(schemaObject) {
    const { items, properties } = schemaObject;
    if (properties) return this.dataTypeLabel('object');
    if (items) return this.dataTypeLabel(`array of ${items.type}s`);
    if (schemaObject.enum) return this.handleEnum(schemaObject.enum);
    return '';
  },

  handleEnum(_enum) {
    if (_enum) {
      return `${this.dataTypeLabel(typeof _enum[0])}. It must match one of these:\n* ${_enum.join(
        '\n* '
      )}`;
    }

    return '';
  },

  capitalize(dataType) {
    return dataType[0].toUpperCase() + dataType.slice(1, dataType.lenth);
  },

  capitalizeSentence(str) {
    return str
      .split(' ')
      .map(word => (word.length > 2 ? this.capitalize(word) : word))
      .join(' ');
  },

  dataTypeLabel(label) {
    if (Array.isArray(label)) {
      return label.map(l => `**${this.capitalizeSentence(l)}**`).join(', or ');
    }

    return `**${this.capitalizeSentence(label)}**`;
  },
};
