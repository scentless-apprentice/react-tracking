# tracking-schema
  
The following illustrates an ideal data layer object as implemented in new NYT Web applications. The overall goal is to have the front-end application team create and maintain this object through the lifecycle of a user's visit. In addition, there will be several events pushed into the data layer that will update the data found in the object as well as be used for triggering tags in GTM.

## Schema Current Taxonomy

### datalayer

  Required Fields: event, application, user, referrer

### datalayer.event

  Description: The “event” value set with each push into the dataLayer triggers the relevant tracking behavior. * Please note: Each time an event fires. The application should perform a dataLayer.push

---

### datalayer.application

  Description: Describes basics attributes of the NYT Web application where the data layer is constructed. For example, it provides the application's version and release number.

  Required Fields: dlVersion, environment, name

### datalayer.application.dlVersion

  Description: The version number of the data layer; this value is updated with each release of the data layer.

  Data Type: string

---

### datalayer.application.releaseVersion

  Description: The version number of the application.

  Data Type: string

---

### datalayer.application.releaseDate

  Description: The timestamp value that indicates when the application version was released.

---

### datalayer.application.renderTimestamp

  Description: The timestamp value that indicates when the page was rendered by the server. Note: Instead, omit and rely on gtm.js which is a timestamp of GTM loading. This value can be used to compute time-bound events for analyses like heartbeat, etc.

---

### datalayer.application.environment

  Description: A value that indicates the location or status of the application.

---

### datalayer.application.name

  Description: The name of the application where the data was collected.

  Data Type: string

---

### datalayer.user

  Description: Describes basic attributes of the NYT user.

  Required Fields: type

### datalayer.user.regiId

  Description: The NYT registration ID of the NYT user.

  Data Type: string

---

### datalayer.user.type

  Description: A value that indicates the type of NYT user

---

### datalayer.user.subscriptions

  Description: TBD

---

### datalayer.user.watSeg

  Description: segments under ‘wat’ in the NYT-D cookie

  Data Type: string

---

### datalayer.referrer

  Description: Contains data about external referrers, internal referrers and module interactions pertaining to the NYT user's session.

  Required Fields: url

### datalayer.referrer.url

  Description: A URL of previous page or document.referrer

---

### datalayer.interaction

  Description: module behavioral/click tracking will have additional fields as we refine the the specifications for that effort

  Required Fields: type

### datalayer.interaction.module

  Description: TBD

### datalayer.interaction.module.name

  Description: see more

  Data Type: string

---

### datalayer.interaction.module.context

  Description: block

  Data Type: string

---

### datalayer.interaction.module.label

  Description: Top News|Featured|Opinion|News|Culture|etc...

  Data Type: string

---

### datalayer.interaction.type

  Description: click for example

  Data Type: string

---

### datalayer.interaction.status

  Description: used to pass success/failure or other status messaging eg. log in success or failure. Many interactions won’t have a status. Those should set an empty string.

  Data Type: string

---

### datalayer.interaction.pagetype

  Description: pagetype when the interaction occurred

  Data Type: string

---

### datalayer.interaction.page_view_id

  Description: for advertising 

  Data Type: string

---

### datalayer.asset

  Description: Describes attributes of NYT content assets. For example,

  Required Fields: id

### datalayer.asset.url

  Description: The canonical URL of the NYT content asset. This value is null for certain "embedded-only" content types like “image slideshow” and some “interactive graphics” assets.

---

### datalayer.asset.section

  Description: The NYT content asset's public-facing label for site navigation that is meant to reflect a core, permanent category of the NYT report.

  Data Type: string

---

### datalayer.asset.subSection

  Description: The NYT content asset's public-facing label for site navigation that sits hierarchically under a section and is meant to reflect a core, permanent category of the NYT report.

  Data Type: string

---

### datalayer.asset.headline

  Description: The NYT content asset's public-facing title

  Data Type: string

---

### datalayer.asset.authors

---

### datalayer.asset.id

  Description: The unique ID of the NYT content asset

  Data Type: string

---

### datalayer.asset.publishedTimestamp

  Description: The UNIX timestamp value that indicates when the NYT content asset was first digitally published.

---

### datalayer.asset.lastUpdatedTimestamp

  Description: The UNIX date-time value that indicates when an NYT digital content asset was last modified or re-published via the CMS.

---

### datalayer.asset.collectionName

  Description: The name of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.

  Data Type: string

---

### datalayer.asset.collectionType

  Description: The type of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.

---

### datalayer.asset.desk

  Description: The name of the NYT newsroom team that is the current owner of the NYT content asset as defined in the CMS.

  Data Type: string

---

### datalayer.asset.kicker

  Description: An optional label intended to be displayed before the headline, generally in smaller type, signifying a type of content.

  Data Type: string

---

### datalayer.asset.originatingDesk

  Description: The name of the NYT newsroom desk that was first assigned the NYT content asset as defined in the CMS.

  Data Type: string

---

### datalayer.asset.slug

  Description: The short name used internally by the newsroom to indicate the content of a story and name an asset while it is in production.This data is not  intended to be exposed or relied upon for public facing-purposes.

  Data Type: string

---

### datalayer.asset.characterCount

  Description: The current number of characters in the context asset's body text

  Data Type: number

---

### datalayer.asset.wordCount

  Description: The current number of words in the content asset's body text.

  Data Type: number

---

### datalayer.presentation

  Description: Describes basic attributes of the page design layout.

### datalayer.presentation.pageType

  Description: The type of NYT content asset as presented to the user during the session.

  Data Type: string

---

### datalayer.presentation.pageSubtype

  Description: TBD

  Data Type: string

---

### datalayer.presentation.cardId

  Description: TBD

  Data Type: string

---

### datalayer.presentation.cardType

  Description: TBD

  Data Type: string

---

### datalayer.presentation.cardRendition

  Description: TBD

---

### datalayer.presentation.documentHeight

  Description: integer height of the entire page in pixels

  Data Type: number

---

### datalayer.marketing

  Description: Describes attributes related to NYT Marketing-related Campaign/Promotion and Product.

### datalayer.marketing.flow

  Description: TBD

---

### datalayer.marketing.campaign

  Description: TBD

---

### datalayer.marketing.product

  Description: TBD

---

### datalayer.viewport

  Description: Describes the current page position within the user agent browser’s viewport and the modules currently in view.

### datalayer.viewport.scrollTop

  Description: The offset, in pixels, from the top of the document at the top of the viewport,

  Data Type: integer

---

### datalayer.viewport.height

  Description: The height, in pixels, of the viewport.

  Data Type: integer

---

### datalayer.viewport.width

  Description: The width, in pixels, of the viewport.

  Data Type: integer

---

### datalayer.viewport.modules

  Description: for future use - comma-separated list of modules in the viewport

  Data Type: string

---

### datalayer.video

  Description: external documentation - video keys documented separately

  Required Fields: contentId

### datalayer.video.action

  Data Type: string

---

### datalayer.video.region

  Data Type: string

---

### datalayer.video.state

---

### datalayer.video.contentCollection

  Data Type: string

---

### datalayer.video.contentId

  Data Type: number

---

### datalayer.video.eventName

  Data Type: string

---

### datalayer.video.eventTimestamp

---

### datalayer.video.module

  Data Type: string

---

### datalayer.video.version

  Data Type: string

---

### datalayer.video.mData

### datalayer.video.mData.device

---

### datalayer.video.mData.playerMode

  Data Type: string

---

### datalayer.video.mData.playerType

  Data Type: string

---

### datalayer.video.mData.playerUsage

  Data Type: string

---

### datalayer.video.mData.playerVersion

  Data Type: string

---

### datalayer.video.mData.tech

  Data Type: string

---

### datalayer.video.mData.videoDeliveryMethod

---

### datalayer.video.mData.videoDuration

  Data Type: number

---

### datalayer.video.mData.videoFranchise

  Data Type: string

---

### datalayer.video.mData.videoName

  Data Type: string

---

### datalayer.video.mData.videoPrimaryPlaylistId

  Data Type: number

---

### datalayer.video.mData.videoPrimaryPlaylistName

  Data Type: string

---

### datalayer.video.mData.videoSection

  Data Type: string

---

### datalayer.video.mData.videoSubSection

  Data Type: string

---

### datalayer.video.mData.videoTimeOfEvent

  Data Type: number

---

### datalayer.video.mData.videoType

---

### datalayer.session

### datalayer.session.meterCount

  Description: A value that indicates the total number of metered NYT content assets consumed during the user session.

  Data Type: number

---

### datalayer.session.isLoggedIn

  Description: A flag that indicates whether a user session is authenticated.

  Data Type: boolean

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author

The New York Times