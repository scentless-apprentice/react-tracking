/**
 * abtest specific data.
 */
module.exports = {
  description: 'Describes attributes of NYT abtests.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  // begin abtest.properties
  properties: {
    test: {
      type: 'string',
      description: 'test name',
    },
    variant: {
      type: 'integer',
      description: 'variant id',
    },
    url: {
      type: 'uri',
      description: 'page url',
    },
  }, // end abtest.properties
};
