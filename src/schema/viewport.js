/**
 * Describes the current page position within the user agent browser’s viewport
 * and the modules currently in view.
 */
module.exports = {
  properties: {

    /**
     * The offset, in pixels, from the top of the document at the top of the viewport,
     */
    scrollTop: { type: 'integer' },

    /**
     * The height, in pixels, of the viewport.
     */
    height: { type: 'integer' },

    /**
     * The width, in pixels, of the viewport.
     */
    width: { type: 'integer' },

    /**
     * for future use - comma-separated list of modules in the viewport 
     */
    modules: { type: 'string' }
  }
};
