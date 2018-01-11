/**
 * Describes attributes related to NYT Marketing landing pages
 * Campaign/Promotion and Product.
 */
module.exports = {
  additionalProperties: false,

  description:
    'Describes attributes related to NYT Marketing-related Campaign/Promotion and Product.',

  properties: {
    env: {
      description: 'Indicates the magnolia page environment, example: "prod"',
      type: 'string',
    },
    isAuthor: {
      description: 'TBD',
      type: 'boolean',
    },
    isPreview: {
      description: 'TBD',
      type: 'boolean',
    },
    templateBuildId: {
      description: 'TBD , ex: "1070"',
      type: 'string',
    },
    creativeUuid: {
      description: 'TBD , ex: "5a8bcb34-b6d0-41a6-b089-5aa3a932d1bd"',
      type: 'string',
    },
    offers: {
      items: {
        type: 'object',
        properties: {
          promoOptions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                productCode: { type: 'string' }, // "XPASS"
                segmentId: { type: 'number' },
                promoCode: { type: 'string' }, // "20000138860",
                currencyCode: { type: 'string' }, // "USD",
                productType: { type: 'string' }, // "DIGI",
                productName: { type: 'string' }, // "Basic Digital Access"
                billingTiers: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      durationDays: { type: 'number' },
                      recurrence: { type: 'number' },
                      totalPrice: { type: 'number' },
                      tierNumber: { type: 'number' },
                    },
                  },
                }, // closes billing tiers
              },
            },
          },
        },
      },
    },
  },
};
