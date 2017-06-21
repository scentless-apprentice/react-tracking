'use strict';

/**
 * Describes attributes related to NYT Marketing-related
 * Campaign/Promotion and Product.
 */
module.exports = {
  additionalProperties: false,

  description: 'Describes attributes related to NYT Marketing-related Campaign/Promotion and Product.',

  properties: {
    flow: {
      description: 'TBD',

      mode: {
        description: 'for future use digi,hd',
        emum: ['digi', 'hd']
      },
      region: {
        description: 'for future use us,int',
        emum: ['us', 'int']
      },
      product: {
        description: 'for future use subscription,gift-purchase,crosswords,gift-redeem',
        type: 'string'
      },
      rate: {
        description: 'for future use regular,edu-b2c,spotify',
        type: 'string'
      }
    },

    campaign: {
      description: 'TBD',
      /*
       * The alphanumeric identifier of the marketing campaign
       * associated with the original subscription.
       */
      code: {
        type: 'string',
        description: 'The alphanumeric identifier of the marketing campaign associated with the original subscription.'
      },

      /*
       * value of &pos from query string       
       */
      pos: {
        type: 'string',
        description: 'value of &pos from query string'
      }
    },

    product: {
      description: 'TBD',
      /**
       * A Marketing-created combination of metadata for digital subscriptions
       * that is a combination of product bundle and promotion 
       * (financial agreement between user and NYT) 
       */
      offerChain: {
        type: 'string',
        description: 'A Marketing-created combination of metadata for digital subscriptions that is a combination of product bundle and promotion (financial agreement between user and NYT) '
      },

      /**
       * An alphanumeric code that represents the product bundle
       *  associated with the current entitlement for digital subscriptions.      
       */
      bundleCode: {
        type: 'string',
        description: 'An alphanumeric code that represents the product bundle associated with the current entitlement for digital subscriptions.'
      },

      /**
       * TBD - digi
       */
      promotion: {
        type: 'string',
        description: 'TBD - digi'
      },

      /**
       * TBD - hd
       */
      product: {
        type: 'string',
        description: 'TBD - hd'
      },

      /**
       * TBD - hd
       */
      promotionCode: {
        type: 'string',
        description: 'TBD - hd'
      }
    }
  }
};