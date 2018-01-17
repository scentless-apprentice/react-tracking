# tracking-schema

Version: 2.2.0

Tracking object schema and validation

## Schema Current Taxonomy

### datalayer

Description: No description found

Data Type: **Object**

Required Fields: event, application, user, referrer

### datalayer.application

Description: Describes basics attributes of the NYT Web application where the data layer is constructed. For example, it provides the application's version and release number.

Data Type: **Object**

Required Fields: dlVersion, environment, name

### datalayer.application.dlVersion

Description: The version number of the data layer; this value is updated with each release of the data layer.

Data Type: **String**

### datalayer.application.releaseVersion

Description: The version number of the application.

Data Type: **String**

### datalayer.application.releaseDate

Description: The timestamp value that indicates when the application version was released.

Data format: date-time

### datalayer.application.renderTimestamp

Description: The timestamp value that indicates when the page was rendered by the server. Note: Instead, omit and rely on gtm.js which is a timestamp of GTM loading. This value can be used to compute time-bound events for analyses like heartbeat, etc.

Data format: date-time

### datalayer.application.environment

Description: A value that indicates the location or status of the application.

Data Type: **String**. It must match one of these:
* production
* staging
* local
* test
* dev
* qa

### datalayer.application.name

Description: The name of the application where the data was collected.

Data Type: **String**

### datalayer.asset

Description: Describes attributes of NYT content assets. For example,

Data Type: **Object**

Required Fields: id

### datalayer.asset.url

Description: The canonical URL of the NYT content asset. This value is null for certain "embedded-only" content types like “image slideshow” and some “interactive graphics” assets.

Data format: uri

### datalayer.asset.section

Description: The NYT content asset's public-facing label for site navigation that is meant to reflect a core, permanent category of the NYT report.

Data Type: **String**

### datalayer.asset.subSection

Description: The NYT content asset's public-facing label for site navigation that sits hierarchically under a section and is meant to reflect a core, permanent category of the NYT report.

Data Type: **String**

### datalayer.asset.headline

Description: The NYT content asset's public-facing title

Data Type: **String**

### datalayer.asset.authors

Description: The list of authors of the NYT content asset, usually joined together with commas and a final "and" to form a byline. Ordinality is important within the newsroom, and generally, authors are ranked in descending order of their contributions to the content or so that the author present in the location where the news events transpired is listed first.

Data Type: **Array of Strings**

### datalayer.asset.id

Description: The unique ID of the NYT content asset

Data Type: **String**

### datalayer.asset.publishedTimestamp

Description: The UNIX timestamp value that indicates when the NYT content asset was first digitally published.

Data format: date-time

### datalayer.asset.lastUpdatedTimestamp

Description: The UNIX date-time value that indicates when an NYT digital content asset was last modified or re-published via the CMS.

Data format: date-time

### datalayer.asset.collectionName

Description: The name of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.

Data Type: **Array**

### datalayer.asset.collectionType

Description: The type of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.

Data Type: **String**. It must match one of these:
* column
* series
* issue
* sectioncollection

### datalayer.asset.desk

Description: The name of the NYT newsroom team that is the current owner of the NYT content asset as defined in the CMS.

Data Type: **String**

### datalayer.asset.kicker

Description: An optional label intended to be displayed before the headline, generally in smaller type, signifying a type of content.

Data Type: **String**

### datalayer.asset.originatingDesk

Description: The name of the NYT newsroom desk that was first assigned the NYT content asset as defined in the CMS.

Data Type: **String**

### datalayer.asset.slug

Description: The short name used internally by the newsroom to indicate the content of a story and name an asset while it is in production.This data is not  intended to be exposed or relied upon for public facing-purposes.

Data Type: **String**

### datalayer.asset.characterCount

Description: The current number of characters in the context asset's body text

Data Type: **Number**

### datalayer.asset.wordCount

Description: The current number of words in the content asset's body text.

Data Type: **Number**

### datalayer.asset.orgFacets

Description: ???

Data Type: **Array**

### datalayer.asset.desFacets

Description: ????

Data Type: **Array**

### datalayer.asset.geoFacets

Description: ???

Data Type: **Array**

### datalayer.asset.storyElements

Description: ???

Data Type: **Array**

### datalayer.asset.commentsDisplayed

Description: True if comments are displayed

Data Type: **Boolean**

### datalayer.asset.commentsActive

Description: True if comments are ???

Data Type: **Boolean**

### datalayer.asset.commentsEnabled

Description: True if comments are enabled

Data Type: **Boolean**

### datalayer.asset.newsSource

Description: ??

Data Type: **String**

### datalayer.asset.contentTone

Description: No description found

Data Type: **String**

### datalayer.asset.originalDesk

Description: ?

Data Type: **String**

### datalayer.asset.printPage

Description: ?

Data Type: **String**

### datalayer.asset.printSection

Description: ?

Data Type: **String**

### datalayer.asset.publishDatePrint

Description: ?

Data format: date-time

### datalayer.asset.publishedDate

Description: ?

Data format: date-time

### datalayer.asset.publishedTimeStamp

Description: ?

Data format: date-time

### datalayer.asset.source

Description: ?

Data Type: **String**

### datalayer.asset.type

Description: ?

Data Type: **String**

### datalayer.asset.typeOfMaterial

Description: ?

Data Type: **String**

### datalayer.asset.language

Description: ?

Data Type: **String**

### datalayer.asset.derivedDesk

Description: ?

Data Type: **String**

### datalayer.asset.gaParams

Description: ?

Data Type: **Object**

### datalayer.asset.storyPatterns

Description: ?

Data Type: **Array**

### datalayer.block

Description: Describes basic attributes of the NYT user.

Data Type: **Object**

### datalayer.block.label

Description: Top Stories

Data Type: **String**

### datalayer.block.template

Description: Overflow

Data Type: **String**

### datalayer.block.name

Description: mobile-home/1

Data Type: **String**

### datalayer.block.index

Description: The ordinal rank of a block within a program (zero-indexed)

Data Type: **Integer**

### datalayer.block.version

Description: 1fjei9

Data Type: **String**

### datalayer.block.region

Description: No description found

Data Type: **Object**

### datalayer.block.list

Description: No description found

Data Type: **Object**

### datalayer.block.list.uri

Description: Unique identifier for the list powering a block

Data Type: **String**

### datalayer.card

Description: Describes basic attributes of the NYT user.

Data Type: **Object**

### datalayer.card.index

Description: An integer representing the ordinal rank of a card within a block

Data Type: **Integer**

### datalayer.card.type

Description: visual

Data Type: **String**

### datalayer.card.rendition

Description: whole

Data Type: **String**

### datalayer.card.url

Description: https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html

Data Type: **String**

### datalayer.card.label

Description: headline

Data Type: **String**

### datalayer.card.region

Description: No description found

Data Type: **Object**

### datalayer.card.id

Description: 100000005090678

Data Type: **String**

### datalayer.event

Description: The “event” value set with each push into the dataLayer triggers the relevant tracking behavior. * Please note: Each time an event fires. The application should perform a dataLayer.push

Data Type: **String**. It must match one of these:
* pageDataReady
* scrollComplete
* heartbeat
* moduleInteraction
* dynamicElementsLoaded
* videoEvent
* impression
* performance
* error

### datalayer.eventData

Description: Describes metadata related to a specific event

Data Type: **Object**

### datalayer.eventData.type

Description: type of interaction: click, submit, swipe...

Data Type: **String**

### datalayer.eventData.success

Description: Indicates whether the attempted action was successful. Default will be true. May be false in the case of a failed newsletter sign-up attempt, for example

Data Type: **Boolean**

### datalayer.eventData.trigger

Description: The front-end component that triggered the event push - e.g., a card

Data Type: **String**

### datalayer.eventData.pagetype

Description: pagetype when the interaction occurred

Data Type: **String**

### datalayer.eventData.timeRendered

Description: Time from responseStart until module is rendered

Data Type: **Number**

### datalayer.eventData.timeViewed

Description: Time from responseStart until module was viewed

Data Type: **Number**

### datalayer.marketing

Description: Describes attributes related to NYT Marketing-related Campaign/Promotion and Product.

Data Type: **Object**

### datalayer.marketing.env

Description: Indicates the magnolia page environment, example: "prod"

Data Type: **String**

### datalayer.marketing.isAuthor

Description: TBD

Data Type: **Boolean**

### datalayer.marketing.isPreview

Description: TBD

Data Type: **Boolean**

### datalayer.marketing.templateBuildId

Description: TBD , ex: "1070"

Data Type: **String**

### datalayer.marketing.creativeUuid

Description: TBD , ex: "5a8bcb34-b6d0-41a6-b089-5aa3a932d1bd"

Data Type: **String**

### datalayer.marketing.offers

Description: No description found

Data Type: **Array of Objects**

### datalayer.module

Description: Describes attributes of a module on the page

Data Type: **Object**

### datalayer.module.name

Description: see more

Data Type: **String**

### datalayer.module.context

Description: block

Data Type: **String**

### datalayer.module.label

Description: Top News|Featured|Opinion|News|Culture|etc...

Data Type: **String**

### datalayer.module.region

Description: No description found

Data Type: **Object**

### datalayer.module.element

Description: Specific link or tool interacted with in the module

Data Type: **Object**

### datalayer.module.element.name

Description: permanent value / slug / id

Data Type: **String**

### datalayer.module.element.url

Description: URL associated with the element, eg. article being shared or linked to

Data Type: **String**

### datalayer.module.element.label

Description: text displayed to the user for this element

Data Type: **String**

### datalayer.pageview

Description: Describes basic attributes of the NYT user.

Data Type: **Object**

### datalayer.pageview.id

Description: The ID for a given page - most useful for tracking advertising impressions

Data Type: **String**

### datalayer.pageview.performance

Description: No description found

Data Type: **Object**

### datalayer.pageview.performance.domInteractive

Description: Total DOM interactive time (in ms), as calculated by timing.domInteractive - timing.navigationStart

Data Type: **Number**

### datalayer.pageview.performance.pageLoadTime

Description: Total page load time (in ms), as calculated by timing.loadEventEnd - timing.navigationStart

Data Type: **Number**

### datalayer.pageview.performance.domContentLoaded

Description: Total page load time (in ms), as calculated by timing.domContentLoadedEventEnd - timing.navigationStart

Data Type: **Number**

### datalayer.pageview.performance.requestStart

Description: Time until the browser starts requesting the current document from the server (in ms), as calculated by timing.requestStart - timing.navigationStart

Data Type: **Number**

### datalayer.pageview.performance.responseStart

Description: Time until the first byte of the response from the server (in ms), as calculated by timing.responseStart - timing.navigationStart

Data Type: **Number**

### datalayer.pageview.ad

Description: ad slot behavior and performance tracking

Data Type: **Object**

### datalayer.pageview.ad.slotId

Description: Id of ad container

Data Type: **String**

### datalayer.pageview.ad.position

Description: position of ad container

Data Type: **String**

### datalayer.pageview.ad.pageViewId

Description: Unique id for page view session

Data Type: **String**

### datalayer.pageview.ad.creativeId

Description: Id of the ad creative

Data Type: **String**

### datalayer.pageview.ad.lineItemId

Description: Id of the line item for the ad

Data Type: **String**

### datalayer.pageview.ad.isEmpty

Description: Flag for when the ad server returned an ad

Data Type: **Boolean**

### datalayer.pageview.ad.timeDefined

Description: Time from responseStart until ad defined

Data Type: **Number**

### datalayer.pageview.ad.timeCalled

Description: Time from responseStart until ad called

Data Type: **Number**

### datalayer.pageview.ad.timeRendered

Description: Time from responseStart until ad rendered

Data Type: **Number**

### datalayer.pageview.ad.timeViewed

Description: Time from responseStart until ad was viewed

Data Type: **Number**

### datalayer.pageview.heartbeat

Description: TBD

Data Type: **Object**

### datalayer.pageview.heartbeat.timeSincePageDataReady

Description: The time elapsed, in milliseconds, since the `pageDataReady` event was emitted.

Data Type: **Integer**

### datalayer.pageview.heartbeat.heartbeatInterval

Description: The frequency of heartbeat event object pushes, in milliseconds.

Data Type: **Integer**

### datalayer.presentation

Description: Describes basic attributes of the page design layout.

Data Type: **Object**

### datalayer.presentation.pageType

Description: The type of NYT content asset as presented to the user during the session.

Data Type: **String**

### datalayer.presentation.pageSubtype

Description: TBD

Data Type: **String**

### datalayer.presentation.cardId

Description: TBD

Data Type: **String**

### datalayer.presentation.cardType

Description: TBD

Data Type: **String**

### datalayer.presentation.cardRendition

Description: TBD

Data Type: **String**. It must match one of these:
* whole
* skim

### datalayer.presentation.program

Description: No description found

Data Type: **Object**

### datalayer.presentation.program.name

Description: home

Data Type: **String**

### datalayer.presentation.program.breakpoint

Description: 1 column

Data Type: **Array**

### datalayer.presentation.program.type

Description: home

Data Type: **String**

### datalayer.presentation.program.version

Description: 12309239

Data Type: **String**

### datalayer.referrer

Description: Contains data about external referrers, internal referrers and module interactions pertaining to the NYT user's session.

Data Type: **Object**

Required Fields: url

### datalayer.referrer.url

Description: A URL of previous page or document.referrer

Data format: uri

### datalayer.session

Description: No description found

Data Type: **Object**

### datalayer.session.meterCount

Description: A value that indicates the total number of metered NYT content assets consumed during the user session.

Data Type: **Number**

### datalayer.session.isLoggedIn

Description: A flag that indicates whether a user session is authenticated.

Data Type: **Boolean**

### datalayer.user

Description: Describes basic attributes of the NYT user.

Data Type: **Object**

Required Fields: type

### datalayer.user.regiId

Description: The NYT registration ID of the NYT user.

Data Type: **String**

### datalayer.user.type

Description: A value that indicates the type of NYT user

Data Type: **String**. It must match one of these:
* anon
* regi
* sub

### datalayer.user.subscriptions

Description: TBD

Data Type: **Array of Objects**

### datalayer.user.watSegs

Description: segments under ‘wat’ in the NYT-D cookie

Data Type: **String**

### datalayer.user.propensity

Description: Metadata about the user's propensity to subscribe

Data Type: **Object**

### datalayer.user.tracking

Description: Metadata about the users latest behavior on our site

Data Type: **Object**

### datalayer.version

Description: Version

Data Type: **String**

### datalayer.viewport

Description: Describes the current page position within the user agent browser’s viewport and the modules currently in view.

Data Type: **Object**

### datalayer.viewport.scrollTop

Description: The offset, in pixels, from the top of the document at the top of the viewport,

Data Type: **Integer**

### datalayer.viewport.height

Description: The height, in pixels, of the viewport.

Data Type: **Integer**

### datalayer.viewport.width

Description: The width, in pixels, of the viewport.

Data Type: **Integer**

### datalayer.viewport.documentHeight

Description: integer height of the entire page in pixels

Data Type: **Number**

### datalayer.viewport.modules

Description: for future use - comma-separated list of modules in the viewport

Data Type: **String**

### datalayer.video

Description: external documentation - video keys documented separately

Data Type: **Object**

Required Fields: contentId

### datalayer.video.action

Description: No description found

Data Type: **String**

### datalayer.video.region

Description: No description found

Data Type: **String**

### datalayer.video.state

Description: No description found

Data Type: **String**. It must match one of these:
* player
* paused

### datalayer.video.contentCollection

Description: No description found

Data Type: **String**

### datalayer.video.contentId

Description: No description found

Data Type: **Number**

### datalayer.video.eventName

Description: No description found

Data Type: **String**

### datalayer.video.eventTimestamp

Description: No description found

Data format: date-time

### datalayer.video.module

Description: No description found

Data Type: **String**

### datalayer.video.version

Description: No description found

Data Type: **String**

### datalayer.video.mData

Description: No description found

Data Type: **Object**

### datalayer.video.mData.device

Description: No description found

Data Type: **String**. It must match one of these:
* desktop
* mobile

### datalayer.video.mData.playerMode

Description: No description found

Data Type: **String**

### datalayer.video.mData.playerType

Description: No description found

Data Type: **String**

### datalayer.video.mData.playerUsage

Description: No description found

Data Type: **String**

### datalayer.video.mData.playerVersion

Description: No description found

Data Type: **String**

### datalayer.video.mData.tech

Description: No description found

Data Type: **String**

### datalayer.video.mData.videoDeliveryMethod

Description: No description found

Data Type: **String**. It must match one of these:
* vod
* live

### datalayer.video.mData.videoDuration

Description: No description found

Data Type: **Number**

### datalayer.video.mData.videoFranchise

Description: No description found

Data Type: **String**

### datalayer.video.mData.videoName

Description: No description found

Data Type: **String**

### datalayer.video.mData.videoPrimaryPlaylistId

Description: No description found

Data Type: **Number**

### datalayer.video.mData.videoPrimaryPlaylistName

Description: No description found

Data Type: **String**

### datalayer.video.mData.videoSection

Description: No description found

Data Type: **String**

### datalayer.video.mData.videoSubSection

Description: No description found

Data Type: **String**

### datalayer.video.mData.videoTimeOfEvent

Description: No description found

Data Type: **Number**

### datalayer.video.mData.videoType

Description: No description found

Data Type: **String**. It must match one of these:
* video
* ad
* 360video

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author

The New York Times
