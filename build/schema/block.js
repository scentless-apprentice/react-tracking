

/**
* Block specific data.
*/
module.exports = {
  description: 'Describes basic attributes of the NYT user.',

  // disallow properties not explicilty listed
  additionalProperties: false,

  properties: {
    /**
     * The user-facing label of the block interacted with.
     * PROVIDED BY: Program manager (i.e., block.title) or, if null, then Samizdat
     * E.g. "Top Stories"
     */
    label: {
      type: 'string',
      description: 'Top Stories',
    },
    /**
     * PROVIDED BY: Program manager (maps to block.template)
     * E.g., 'Overflow'
     */
    template: {
      type: 'string',
      description: 'Overflow',
    },
    /**
     * The name of the block interacted with.
     * PROVIDED BY: Program manager (block.data_id)
     * E.g. "mobile-home/1"
     */
    name: {
      type: 'string',
      description: 'mobile-home/1',
    },
    /**
     * The order in which a block appears in a program
     * PROVIDED BY: Vi platform
     * E.g. 0 (i.e., first block within a program)
     */
    index: {
      type: 'integer',
      description: 'The ordinal rank of a block within a program (zero-indexed)',
    },
    /**
     * The version of a block's front-end view implementation
     * PROVIDED BY: Vi platform
     * NOTE: this should be left blank until we (Platforms + Data) can figure out
     * how this should be represented and what it should mean
     */
    version: {
      type: 'string',
      description: '1fjei9',
    },

    // Region to be defined
    region: {
      properties: {},
    },

    /**
     * The list powering a block
     * PROVIDED BY: Program manager (block.dataSource)
     * NOTE: This is an object because its expected that in the future, we may add
     * more data to the list object that specifies additional targeting (e.g., geo
     * personalization) on a list. That said, only the `uri` is required for now.
     * E.g. {uri: '123456789'}
     */
    list: {
      properties: {
        /**
         * The unique identifier (i.e., uri) that is the data source for a block
         * PROVIDED BY: Program manager
         * E.g. 'mobile-home/1'
         */
        uri: {
          type: 'string',
          description: 'Unique identifier for the list powering a block',
        },
      },
    },
  }, // end card.properties
};
