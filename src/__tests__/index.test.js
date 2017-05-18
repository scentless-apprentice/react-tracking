const validate = require('../index').validate;
const example = require('../example');

describe('index', () => {
  it('validates against example data', () => {
    const result = validate(example);

    expect(!result.errors).toBe(true, result.errors);
  });

  it('validates individual video event data', () => {
    const result = validate(
      { video: example.video },
      { individualEvents: true },
    );

    expect(!result.errors).toBe(true, result.errors);
  });
});
