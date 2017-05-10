# tracking-schema
  
The following illustrates an ideal data layer object as implemented in new NYT Web applications. The overall goal is to have the front-end application team create and maintain this object through the lifecycle of a user's visit. In addition, there will be several events pushed into the data layer that will update the data found in the object as well as be used for triggering tags in GTM.

## Schema Current Taxonomy

### datalayer

Description: No description found

Data Type: **Object**

Required Fields: event, application, user, referrer

### datalayer.event

Description: The “event” value set with each push into the dataLayer triggers the relevant tracking behavior. * Please note: Each time an event fires. The application should perform a dataLayer.push

Data Type: **String**. It must match one of these:
* pageDataReady
* scrollComplete
* heartbeat
* moduleInteraction
* dynamicElementsLoaded
* videoEvent

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

### datalayer.user.watSeg

Description: segments under ‘wat’ in the NYT-D cookie

Data Type: **String**

### datalayer.referrer

Description: Contains data about external referrers, internal referrers and module interactions pertaining to the NYT user's session.

Data Type: **Object**

Required Fields: url

### datalayer.referrer.url

Description: A URL of previous page or document.referrer

Data format: uri

### datalayer.interaction

Description: module behavioral/click tracking will have additional fields as we refine the the specifications for that effort

Data Type: **Object**

Required Fields: type

### datalayer.interaction.module

Description: TBD

Data Type: **Object**

### datalayer.interaction.module.name

Description: see more

Data Type: **String**

### datalayer.interaction.module.context

Description: block

Data Type: **String**

### datalayer.interaction.module.label

Description: Top News|Featured|Opinion|News|Culture|etc...

Data Type: **String**

### datalayer.interaction.type

Description: click

Data Type: **String**

### datalayer.interaction.status

Description: used to pass success/failure or other status messaging eg. log in success or failure. Many interactions won’t have a status. Those should set an empty string.

Data Type: **String**

### datalayer.interaction.pagetype

Description: pagetype when the interaction occurred

Data Type: **String**

### datalayer.interaction.page_view_id

Description: for advertising 

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

Data Type: **String**

### datalayer.asset.collectionType

Description: The type of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.

Data Type: **String**. It must match one of these:
* column
* series
* issue

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

### datalayer.presentation.documentHeight

Description: integer height of the entire page in pixels

Data Type: **Number**

### datalayer.marketing

Description: Describes attributes related to NYT Marketing-related Campaign/Promotion and Product.

Data Type: **Object**

### datalayer.marketing.flow

Description: TBD

### datalayer.marketing.campaign

Description: TBD

### datalayer.marketing.product

Description: TBD

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

### datalayer.session

Description: No description found

Data Type: **Object**

### datalayer.session.meterCount

Description: A value that indicates the total number of metered NYT content assets consumed during the user session.

Data Type: **Number**

### datalayer.session.isLoggedIn

Description: A flag that indicates whether a user session is authenticated.

Data Type: **Boolean**

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author

The New York Times
