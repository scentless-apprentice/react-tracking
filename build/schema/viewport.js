'use strict';

/**
 * Describes the current page position within the user agent browser’s viewport
 * and the modules currently in view.
 */
module.exports = {
  description: 'Describes the current page position within the user agent browser’s viewport and the modules currently in view.',

  properties: {

    /**
     * The offset, in pixels, from the top of the document at the top of the viewport,
     */
    scrollTop: {
      type: 'integer',
      description: 'The offset, in pixels, from the top of the document at the top of the viewport,'
    },

    /**
     * The height, in pixels, of the viewport.
     */
    height: {
      type: 'integer',
      description: 'The height, in pixels, of the viewport.'
    },

    /**
     * The width, in pixels, of the viewport.
     */
    width: {
      type: 'integer',
      description: 'The width, in pixels, of the viewport.'
    },

    /**
     * for future use - comma-separated list of modules in the viewport
     */
    modules: {
      type: 'string',
      description: 'for future use - comma-separated list of modules in the viewport'
    }
  }
};