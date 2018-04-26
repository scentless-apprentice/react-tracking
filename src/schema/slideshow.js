/**
 * Module specific data.
 */
module.exports = {
  description: 'Describes attributes of a slideshow module ',
  // all properties not explicilty listed
  additionalProperties: true,

  properties: {
    /**
     * The number of the slide being viewed.
     */
    currentSlide: {
      type: ['number', 'null'],
      description: 'The number of the slide being viewed',
    },

    /**
     * The headline of the slideshow
     */
    previousSlide: {
      type: ['number', 'null'],
      description: 'The number of the previous slide',
    },

    /**
     * The number of slides in the slideshow
     */
    lengthOfSlideshow: {
      type: ['number', 'null'],
      description: 'The number of slides in the slideshow',
    },

    /**
     * Which slide was viewed first
     */
    entrySlide: {
      type: ['number', 'null'],
      description: 'The number of slide which was viewed first',
    },

    /**
     * The headline of the slideshow
     */
    slideshowTitle: {
      type: 'string',
      description: 'The headline of the slideshow',
    },

    /**
     * The type of the slide
     * e.g. slide, grid, ad, endslate, last slide
     */
    slideType: {
      type: 'string',
      description: 'The type of slide being viewed',
    },

    /**
     * The type of the slide
     * e.g. slide, grid, ad, endslate, last slide
     */
    previousSlideType: {
      type: 'string',
      description: 'The type of slide that was viewed right before',
    },

    /**
     * Indicates whether the slideshow was being viewed in fullscreen
     */
    fullscreen: {
      type: 'boolean',
      description: 'Whether the slideshow is being viewed in fullscreen',
    },

    /**
     * The number of slides viewed by the user
     */
    slidesViewed: {
      type: ['number', 'null'],
      description: 'The number of slides the user has viewed so far',
    },

    /**
     * The number of ads the user was exposed to
     */
    adsViewed: {
      type: ['number', 'null'],
      description: 'The number of ads the user was exposed to',
    },
  }, // end module.properties
};
