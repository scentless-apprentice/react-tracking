/* eslint-disable no-console */

const group = console.groupCollapsed || console.group || console.log;

const formatDataPath = dataPath => {
  if (dataPath.startsWith('.') || dataPath === '') {
    return `ROOT${dataPath}`;
  }

  return dataPath;
};

module.exports = {
  error: (errors, beforeEnd) => {
    if (errors) {
      group('[tracking-schema] 🚫 tracking data is invalid 🚫');

      errors.forEach(e => {
        let msg = ` 👉  [${e.keyword} error]: ${formatDataPath(e.dataPath)} ${e.message}`;

        if (e.keyword === 'additionalProperties') {
          msg += ` (it had ${Object.keys(e.params)
            .map(p => `'${e.params[p]}'`)
            .join(', ')})`;
        }

        console.log(msg);
      });

      if (beforeEnd) beforeEnd();

      if (console.groupEnd) console.groupEnd();
    }
  },

  emptyDataError: [
    {
      keyword: 'required',
      message: 'DL data object is missing or empty',
    },
  ],
};
