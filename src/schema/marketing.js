/**
 * Describes attributes related to NYT Marketing-related
 * Campaign/Promotion and Product.
 */
module.exports = {
  additionalProperties: false,

  properties: {
    flow: {
      mode: {
        emum: ['digi', 'hd']
      },
      region: {
        emum: ['us', 'int']
      },
      product: { type: 'string' },
      rate: { type: 'string' }
    },

    campaign: {
      /*
       * The alphanumeric identifier of the marketing campaign
       * associated with the original subscription.
       */
      code: { type: 'string' },

      /*
       * value of &pos from query string       
       */
      pos: { type: 'string' },
    },

    product: {

      /**
       * A Marketing-created combination of metadata for digital subscriptions
       * that is a combination of product bundle and promotion 
       * (financial agreement between user and NYT) 
       */
      offerChain: { type: 'string' },

      /**
       * An alphanumeric code that represents the product bundle
       *  associated with the current entitlement for digital subscriptions.      
       */
      bundleCode: { type: 'string' },

      /**
       * TBD - digi
       */
      promotion: { type: 'string' },

      /**
       * TBD - hd
       */
      product: { type: 'string' },

      /**
       * TBD - hd
       */
      promotionCode: { type: 'string' },
    },
  }
};
