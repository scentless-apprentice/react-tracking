

/**
* Name of event that triggered dataLayer push.
*/
module.exports = {
  description: 'The \u201Cevent\u201D value set with each push into the dataLayer triggers the relevant tracking behavior. * Please note: Each time an event fires. The application should perform a dataLayer.push',

  enumDescription: {
    pageDataReady: 'This event triggers pageview tracking. It should be sent with the initial      dataLayer push and with any dynamic update that should be tracked as a pageview. ',
    scrollComplete: 'This event should fire when a user has stopped scrolling for 250ms. It should push new viewport values into the dataLayer. ',
    heartbeat: 'This event should fire every n seconds where n varies by application and page type. This event push new heartbeat values into the dataLayer.  ',
    moduleInteraction: 'This event should fire when a user interacts with a module triggering a page update, dialogue box, etc. This should push new referrer and interaction values into the dataLayer.',
    dynamicElementsLoaded: 'If there are elements that get loaded after the pageDataReady event, push this event and be sure to set presentation.documentHeight since the new elements will likely impact that value. If the new elements include tracked module(s) that appear in the viewport immediately, it should push a new value into viewport.modules. ',
    videoEvent: 'This event should fire for any video related event. This should push new values into the video object. ',
    performance: 'This is the first event that fires when a page loads, tracks page load time',
    error: 'This event triggers when an error is thrown on the page',
  },

  // TODO: Are these all of them?
  enum: [
  /**
   * This event triggers pageview tracking. It should be sent with the initial
   * dataLayer push and with any dynamic update that should be tracked as a pageview.
   */
    'pageDataReady',

  /**
  * This event should fire when a user has stopped scrolling for 250ms.
  * It should push new viewport values into the dataLayer.
  */
    'scrollComplete',

  /**
  * This event should fire every n seconds where n varies by application and page type.
  * This event push new heartbeat values into the dataLayer.
  */
    'heartbeat',

  /**
  * This event should fire when a user interacts with a module triggering a page update,
  * dialogue box, etc. This should push new referrer and interaction values into the
  * dataLayer.
  */
    'moduleInteraction',

  /**
  * If there are elements that get loaded after the pageDataReady event, push this event
  * and be sure to set presentation.documentHeight since the new elements will likely
  * impact that value. If the new elements include tracked module(s) that appear in the
  * viewport immediately, it should push a new value into viewport.modules.
  */
    'dynamicElementsLoaded',

  /**
  * This event should fire for any video related event. This should push new values into
  * the video object.
  */
    'videoEvent',

  /**
   * This event should fire for when a module / card / block comes into view. This should push new values into the corresponding module / card /block object.
   */
    'impression', 'performance', 'error'],
};
