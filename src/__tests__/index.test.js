const validate = require('../index');
const example = require('../example');

describe('index', () => {
  it('validates against example data', () => {
    var errors = validate({data: example});
    expect(!errors.length).toBe(true, errors);
  });  
});
