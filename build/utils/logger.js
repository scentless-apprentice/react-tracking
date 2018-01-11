

/* eslint-disable no-console */

const group = console.groupCollapsed || console.group || console.log;

const formatDataPath = function formatDataPath(dataPath) {
  if (dataPath.startsWith('.') || dataPath === '') {
    return `ROOT${dataPath}`;
  }

  return dataPath;
};

module.exports = {
  error: function error(errors, beforeEnd) {
    if (errors) {
      group('[tracking-schema] 🚫 tracking data is invalid 🚫');

      // console.log(errors);

      errors.forEach((e) => {
        let msg = ` \uD83D\uDC49  [${e.keyword} error]: ${formatDataPath(e.dataPath)} ${e.message}`;

        if (e.keyword === 'additionalProperties') {
          msg += ` (it had ${Object.keys(e.params).map(p => `'${e.params[p]}'`).join(', ')})`;
        }

        console.log(msg);
      });

      if (beforeEnd) beforeEnd();

      if (console.groupEnd) console.groupEnd();
    }
  },

  emptyDataError: [{
    keyword: 'required',
    message: 'DL data object is missing or empty',
  }],
};
