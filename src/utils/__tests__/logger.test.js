global.console.log = jest.fn();

const errors = [
  {
    keyword: 'additionalProperties',
    dataPath: '',
    message: 'should NOT have additional properties',
    params: {
      additionalProperty: 'someParam',
    },
  },
  {
    keyword: 'required',
    dataPath: '.thing',
    message: "should have required property 'id'",
    params: {
      additionalProperty: 'someParam',
    },
  },
  {
    keyword: 'type',
    dataPath: '.thing',
    message: 'should be number',
  },
];

describe('logger', () => {
  afterEach(() => {
    jest.resetModules();
    global.console.log.mockClear();
  });

  it('logs errors to console.log', () => {
    const logger = require('../logger'); // eslint-disable-line global-require
    logger.error(errors);

    expect(global.console.log).toHaveBeenCalled();
    expect(global.console.log.mock.calls).toMatchSnapshot();
  });

  it('uses console.group when available', () => {
    global.console.groupCollapsed = jest.fn();
    global.console.groupEnd = jest.fn();
    const logger = require('../logger'); // eslint-disable-line global-require

    logger.error(errors);

    expect(global.console.groupCollapsed).toHaveBeenCalledTimes(1);
    expect(global.console.groupEnd).toHaveBeenCalledTimes(1);
  });
});
