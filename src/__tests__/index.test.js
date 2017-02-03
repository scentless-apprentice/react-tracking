const validate = require('../index');
const example = require('../example');

describe('index', () => {
  it('validates against example data', () => {
    var errors = validate(example);
    expect(!errors).toBe(true, errors);
  });  
});
