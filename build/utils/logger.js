'use strict';

/* eslint-disable no-console */

var group = console.groupCollapsed || console.group || console.log;

var formatDataPath = function formatDataPath(dataPath) {
  if (dataPath.startsWith('.') || dataPath === '') {
    return 'ROOT' + dataPath;
  }

  return dataPath;
};

module.exports = {
  error: function error(errors) {
    if (errors) {
      group('[tracking-schema] 🚫 tracking data is invalid 🚫');

      // console.log(errors);

      errors.forEach(function (e) {
        var msg = ' \uD83D\uDC49  [' + e.keyword + ' error]: ' + formatDataPath(e.dataPath) + ' ' + e.message;

        if (e.keyword === 'additionalProperties') {
          msg += ' (it had ' + Object.keys(e.params).map(function (p) {
            return '\'' + e.params[p] + '\'';
          }).join(', ') + ')';
        }

        console.log(msg);
      });

      if (console.groupEnd) console.groupEnd();
    }
  },

  emptyDataError: [{
    keyword: 'required',
    message: 'DL data object is missing or empty'
  }]
};