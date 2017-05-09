'use strict';
const path = require('path');
const fs = require('fs');
const template = require('es6-template-strings');
const components =  "./components";
const schemaModel = require('../schema');

const toMarkdown = (templateContents, data) => {
  // bind all functions in ./macros and pass the current scope (data + macros)
  let boundComponents = {};
  Object.keys(components).forEach((key, idx) => {
    boundComponents[key] = options => (components[key] || function(){ return '';})(options, scope);
  });
  let scope = Object.assign(data, boundComponents);
  let markdown = template(templateContents, scope);
  return markdown;
}

const compile = (userPath, fallbackPath, cb) => {
  let userTemplate = path.join(process.cwd(), userPath);
  
  fs.exists(userTemplate, function (exists) {
      
    const sourceTemplate = (exists && userTemplate) || (fallbackPath || null);
    
    if (sourceTemplate) {

      fs.readFile(sourceTemplate, function (err, contents) {
        
        if (err) {
          throw 'cannot read ' + sourceTemplate;
        }
        
        const data = schemaModel.get();

        cb(toMarkdown(contents, data));
      });
      return;
    }
    cb();
  });
}

const createReadme = (overwrite=true) => {
  compile('.README.md', './.documentation.tmpl.md', function(markdown) {
    let destination = './documentation.md';
    
    fs.exists(destination, function (exists) {
      if (exists && !overwrite) {
        throw destination + ' already exists';
      }
      fs.writeFile(destination, markdown, function (err) {
        if (err) throw err;
        console.log('documentation.md created');
      });
    });
  });
}

module.exports = {
  generate: createReadme
};