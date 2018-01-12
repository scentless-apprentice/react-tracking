const path = require('path');
const fs = require('fs');
const template = require('es6-template-strings');
const components = require('./components');
const schemaModel = require('../schema');
const pkg = require('../../package.json');

const toMarkdown = (templateContents, data = {}) => {
  // bind all functions in ./macros and pass the current scope (data + macros)
  const scope = Object.keys(components).reduce((_data, key) => {
    _data[key] = options => (components[key] || (() => ''))(options, data);

    return _data;
  }, data);
  
  const markdown = template(templateContents, scope);
  return markdown;
};

const compile = (userPath, fallbackPath, cb) => {
  const userTemplate = path.join(process.cwd(), userPath);

  fs.exists(userTemplate, (exists) => {
    const sourceTemplate = (exists && userTemplate) || (fallbackPath || null);

    if (sourceTemplate) {
      fs.readFile(sourceTemplate, (err, contents) => {
        if (err) {
          throw new Error(`cannot read ${sourceTemplate} --- ${err}`);
        }

        const data = Object.assign({
          pkg,
          schemaData: schemaModel.get(),
        });

        cb(toMarkdown(contents, data));
      });
      return;
    }
    cb();
  });
};

const createDocumentation = (overwrite = true) => {
  compile('.documentation.tmpl.md', path.join(__dirname, '.documentation.tmpl.md'), (markdown) => {
    const destination = './Documentation.md';

    fs.exists(destination, (exists) => {
      if (exists && !overwrite) {
        throw new Error(`${destination} already exists`);
      }
      fs.writeFile(destination, markdown, (err) => {
        if (err) throw err;
        console.log('Documentation.md created');
      });
    });
  });
};

module.exports = {
  generate: createDocumentation,
};
