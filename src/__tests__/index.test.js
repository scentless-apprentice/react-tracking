const validator = require('../index').validator;
const example = require('../example');

describe('index', () => {
  it('validates against example data', () => {
    const result = validator(example);

    expect(!result.errors).toBe(true, result.errors);
  });

  it('validates individual video event data', () => {
    const result = validator(
      { video: example.video },
      { individualEvents: true },
    );

    expect(!result.errors).toBe(true, result.errors);
  });

  it('validates individual card data', () => {
    const result = validator(
      { card: example.card },
      { individualEvents: true },
    );

    expect(!result.errors).toBe(true, result.errors);
  })
});
