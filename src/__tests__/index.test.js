const validate = require('../index');
const example = require('../example');

describe('index', () => {
  it('validates against example data', () => {
    var result = validate({data: example});

    expect(!result.errors).toBe(true, result.errors);
  });  
});
