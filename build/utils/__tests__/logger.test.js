'use strict';

global.console.log = jest.fn();

var errors = [{
  keyword: 'additionalProperties',
  dataPath: '',
  message: 'should NOT have additional properties',
  params: {
    additionalProperty: 'someParam'
  }
}, {
  keyword: 'required',
  dataPath: '.thing',
  message: "should have required property 'id'",
  params: {
    additionalProperty: 'someParam'
  }
}, {
  keyword: 'type',
  dataPath: '.thing',
  message: 'should be number'
}];

describe('logger', function () {
  beforeEach(function () {
    jest.resetModules();
    global.console.log.mockClear();
  });

  it('logs errors to console.log', function () {
    var logger = require('../logger');
    logger.error(errors);

    expect(console.log).toHaveBeenCalled();

    expect(global.console.log.mock.calls).toMatchSnapshot();
  });

  it('uses console.group when available', function () {
    global.console.group = jest.fn();
    global.console.groupEnd = jest.fn();
    var logger = require('../logger');

    logger.error(errors);

    expect(global.console.group).toHaveBeenCalledTimes(1);
    expect(global.console.groupEnd).toHaveBeenCalledTimes(1);
  });
});