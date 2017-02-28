module.exports = {
  event: 'heartbeat',

  application: {
    dlVersion: '1.0.1',
    releaseVersion: '1.0.0',
    releaseDate: Date.now(),
    environment: 'dev',
    name: 'test-app',
  },

  asset: {
    url: 'https://www.nytimes.com/2017/02/02/briefing/donald-trump-australia-betsy-devos.html',
    section: 'briefing',
    headline: 'Donald Trump, Australia, Betsy DeVos: Your Thursday Briefing',
    authors: 'Sean Alfano',
    id: '100000004906353',
    publishedTimestamp: 1486032632,
    lastUpdatedTimestamp: 1486045904,
    desk: 'NYTNow',
    originatingDesk: 'NYTNow',
    wordCount: 1173
  },

  presentation: {
    pageType: 'article'
  },

  user: {
    type: 'regi',
    regiId: '11100023',
    subscriptions: [{
      test: 1
    }],    
    watSeg: '{ test: "true" }',
  },

  referrer: {
    url: 'http://example.com',
  },
   
  video: {
    module: 'video-player',
    version: 'unknown',
    state: 'paused',
    contentCollection: 'arts',
    region: '',
    action: '',
    contentId: 100000004898957,
    eventName: 'player-load',
    eventTimestamp: 1486048519879,
    mData: {
      videoName: 'Get ‘Bad and Boujee’ Onstage With Migos',
      videoType: '360video',
      device: 'desktop',
      playerMode: 'html5',
      playerType: '',
      playerUsage: 'vanilla_js',
      playerVersion: '2.119.0',
      tech: 'html5',
      videoDeliveryMethod: 'vod',
      videoDuration: 64,
      videoFranchise: '',
      videoPrimaryPlaylistId: 100000004687548,
      videoPrimaryPlaylistName: 'The Daily 360',
      videoSection: 'arts',
      videoSubSection: '',
      videoTimeOfEvent: 0
    }  
  }
};
