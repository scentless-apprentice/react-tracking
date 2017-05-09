# tracking-schema
  
The following illustrates an ideal data layer object as implemented in new NYT Web applications. The overall goal is to have the front-end application team create and maintain this object through the lifecycle of a user's visit. In addition, there will be several events pushed into the data layer that will update the data found in the object as well as be used for triggering tags in GTM.

## Schema Current Taxonomy

### datalayer

	Description: 

	Required Fields: event, application, user, referrer

### datalayer.event

	Description: The “event” value set with each push into the dataLayer triggers the relevant tracking behavior. * Please note: Each time an event fires. The application should perform a dataLayer.push
### datalayer.application

	Description: Describes basics attributes of the NYT Web application where the data layer is constructed. For example, it provides the application's version and release number.

	Required Fields: dlVersion, environment, name

### datalayer.application.dlVersion

	Description: The version number of the data layer; this value is updated with each release of the data layer.
### datalayer.application.releaseVersion

	Description: The version number of the application.
### datalayer.application.releaseDate

	Description: The timestamp value that indicates when the application version was released.
### datalayer.application.renderTimestamp

	Description: The timestamp value that indicates when the page was rendered by the server. Note: Instead, omit and rely on gtm.js which is a timestamp of GTM loading. This value can be used to compute time-bound events for analyses like heartbeat, etc.
### datalayer.application.environment

	Description: A value that indicates the location or status of the application.
### datalayer.application.name

	Description: The name of the application where the data was collected.
### datalayer.user

	Description: Describes basic attributes of the NYT user.

	Required Fields: type

### datalayer.user.regiId

	Description: The NYT registration ID of the NYT user.
### datalayer.user.type

	Description: A value that indicates the type of NYT user
### datalayer.user.subscriptions

	Description: TBD
### datalayer.user.watSeg

	Description: segments under ‘wat’ in the NYT-D cookie
### datalayer.referrer

	Description: Contains data about external referrers, internal referrers and module interactions pertaining to the NYT user's session.

	Required Fields: url

### datalayer.referrer.url

	Description: A URL of previous page or document.referrer
### datalayer.interaction

	Description: module behavioral/click tracking will have additional fields as we refine the the specifications for that effort

	Required Fields: type

### datalayer.interaction.module

	Description: TBD

### datalayer.interaction.module.name

	Description: see more
### datalayer.interaction.module.context

	Description: block
### datalayer.interaction.module.label

	Description: Top News|Featured|Opinion|News|Culture|etc...
### datalayer.interaction.type

	Description: click for example
### datalayer.interaction.status

	Description: used to pass success/failure or other status messaging eg. log in success or failure. Many interactions won’t have a status. Those should set an empty string.
### datalayer.interaction.pagetype

	Description: pagetype when the interaction occurred
### datalayer.interaction.page_view_id

	Description: for advertising 
### datalayer.asset

	Description: Describes attributes of NYT content assets. For example,

	Required Fields: id

### datalayer.asset.url

	Description: The canonical URL of the NYT content asset. This value is null for certain "embedded-only" content types like “image slideshow” and some “interactive graphics” assets.
### datalayer.asset.section

	Description: The NYT content asset's public-facing label for site navigation that is meant to reflect a core, permanent category of the NYT report.
### datalayer.asset.subSection

	Description: The NYT content asset's public-facing label for site navigation that sits hierarchically under a section and is meant to reflect a core, permanent category of the NYT report.
### datalayer.asset.headline

	Description: The NYT content asset's public-facing title
### datalayer.asset.authors

	Description: 
### datalayer.asset.id

	Description: The unique ID of the NYT content asset
### datalayer.asset.publishedTimestamp

	Description: The UNIX timestamp value that indicates when the NYT content asset was first digitally published.
### datalayer.asset.lastUpdatedTimestamp

	Description: The UNIX date-time value that indicates when an NYT digital content asset was last modified or re-published via the CMS.
### datalayer.asset.collectionName

	Description: The name of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.
### datalayer.asset.collectionType

	Description: The type of the NYT content asset collection. A collection is a grouping of two or more NYT content assets collected together based on journalistic intent.
### datalayer.asset.desk

	Description: The name of the NYT newsroom team that is the current owner of the NYT content asset as defined in the CMS.
### datalayer.asset.kicker

	Description: An optional label intended to be displayed before the headline, generally in smaller type, signifying a type of content.
### datalayer.asset.originatingDesk

	Description: The name of the NYT newsroom desk that was first assigned the NYT content asset as defined in the CMS.
### datalayer.asset.slug

	Description: The short name used internally by the newsroom to indicate the content of a story and name an asset while it is in production.This data is not  intended to be exposed or relied upon for public facing-purposes.
### datalayer.asset.characterCount

	Description: The current number of characters in the context asset's body text
### datalayer.asset.wordCount

	Description: The current number of words in the content asset's body text.
### datalayer.presentation

	Description: Describes basic attributes of the page design layout.

### datalayer.presentation.pageType

	Description: The type of NYT content asset as presented to the user during the session.
### datalayer.presentation.pageSubtype

	Description: TBD
### datalayer.presentation.cardId

	Description: TBD
### datalayer.presentation.cardType

	Description: TBD
### datalayer.presentation.cardRendition

	Description: TBD
### datalayer.presentation.documentHeight

	Description: integer height of the entire page in pixels
### datalayer.marketing

	Description: Describes attributes related to NYT Marketing-related Campaign/Promotion and Product.

### datalayer.marketing.flow

	Description: TBD
### datalayer.marketing.campaign

	Description: TBD
### datalayer.marketing.product

	Description: TBD
### datalayer.viewport

	Description: Describes the current page position within the user agent browser’s viewport and the modules currently in view.

### datalayer.viewport.scrollTop

	Description: The offset, in pixels, from the top of the document at the top of the viewport,
### datalayer.viewport.height

	Description: The height, in pixels, of the viewport.
### datalayer.viewport.width

	Description: The width, in pixels, of the viewport.
### datalayer.viewport.modules

	Description: for future use - comma-separated list of modules in the viewport
### datalayer.video

	Description: external documentation - video keys documented separately

	Required Fields: contentId

### datalayer.video.action

	Description: 
### datalayer.video.region

	Description: 
### datalayer.video.state

	Description: 
### datalayer.video.contentCollection

	Description: 
### datalayer.video.contentId

	Description: 
### datalayer.video.eventName

	Description: 
### datalayer.video.eventTimestamp

	Description: 
### datalayer.video.module

	Description: 
### datalayer.video.version

	Description: 
### datalayer.video.mData

	Description: 

### datalayer.video.mData.device

	Description: 
### datalayer.video.mData.playerMode

	Description: 
### datalayer.video.mData.playerType

	Description: 
### datalayer.video.mData.playerUsage

	Description: 
### datalayer.video.mData.playerVersion

	Description: 
### datalayer.video.mData.tech

	Description: 
### datalayer.video.mData.videoDeliveryMethod

	Description: 
### datalayer.video.mData.videoDuration

	Description: 
### datalayer.video.mData.videoFranchise

	Description: 
### datalayer.video.mData.videoName

	Description: 
### datalayer.video.mData.videoPrimaryPlaylistId

	Description: 
### datalayer.video.mData.videoPrimaryPlaylistName

	Description: 
### datalayer.video.mData.videoSection

	Description: 
### datalayer.video.mData.videoSubSection

	Description: 
### datalayer.video.mData.videoTimeOfEvent

	Description: 
### datalayer.video.mData.videoType

	Description: 
### datalayer.session

	Description: 

### datalayer.session.meterCount

	Description: A value that indicates the total number of metered NYT content assets consumed during the user session.
### datalayer.session.isLoggedIn

	Description: A flag that indicates whether a user session is authenticated.

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author

The New York Times