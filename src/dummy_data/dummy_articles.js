let dummy_articles = [
  {
    "source": {
        "id": "engadget",
        "name": "Engadget"
    },
    "author": "Mariella Moon",
    "title": "Netflix kills in-app subscriptions on Apple hardware - Engadget",
    "description": "Netflix completely removes the option to pay via iTunes.",
    "url": "https://www.engadget.com/2018/12/28/netflix-kills-apple-in-app-subscription/",
    "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D4256%252C2832%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1065%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2018-12%252Fcc4106f0-0b00-11e9-befe-33925b4f6233%26client%3Da1acac3e1b3290917d92%26signature%3D45b2af5f01011527a46bc9356a007f7544cb3be6&client=amp-blogside-v2&signature=258f14046cc9b3ea9314161fd3cf0aa78bb97d50",
    "publishedAt": "2018-12-29T02:55:04Z",
    "content": "As VentureBeat noted, Apple takes a 15 to 30 percent cut from in-app subscriptions, and that has been a growing point of contention between the tech giant and app developers. Now, Netflix can pocket all the proceeds from its iOS customers -- and the additiona… [+418 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Youtube.com"
      },
      "author": null,
      "title": "Amanda Nunes vs Cris Cyborg | WEIGH-INS | UFC 232 - UFC ON FOX",
      "description": null,
      "url": "https://www.youtube.com/watch?v=65jfYVFBG7o",
      "urlToImage": "https://i.imgur.com/BrNrxRt.gif",
      "publishedAt": "2018-12-29T01:19:00Z",
      "content": "[[getSimpleString(data.title)]] [[getSimpleString(data.description)]] [[getSimpleString(data.videoCountText)]]"
  },
  {
      "source": {
          "id": null,
          "name": "Nypost.com"
      },
      "author": "Lisa Fickenscher",
      "title": "Eddie Lampert submits $4.4 billion rescue bid for Sears - New York Post ",
      "description": "You wouldn’t exactly call it romantic, but Eddie Lampert is making a last-ditch attempt to rescue Sears. In a scramble to meet a dramatic 4 p.m. deadline ordered by a bankruptcy judge, the struggli…",
      "url": "https://nypost.com/2018/12/28/eddie-lampert-submits-4-6-billion-rescue-bid-for-sears/",
      "urlToImage": "https://thenypost.files.wordpress.com/2018/12/lampert-sears-offer.jpg?quality=90&strip=all&w=1200",
      "publishedAt": "2018-12-29T00:44:00Z",
      "content": "You wouldnt exactly call it romantic, but Eddie Lampert is making a last-ditch attempt to rescue Sears. In a scramble to meet a dramatic 4 p.m. deadline ordered by a bankruptcy judge, the struggling financiers hedge fund on Friday said it cobbled together a $… [+2695 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Spaceflightnow.com"
      },
      "author": null,
      "title": "NASA's New Horizons spacecraft heads for New Year's encounter with distant world - Spaceflight Now",
      "description": null,
      "url": "https://spaceflightnow.com/2018/12/28/nasas-new-horizons-spacecraft-heads-for-new-years-encounter-with-distant-world/",
      "urlToImage": "https://i.imgur.com/BrNrxRt.gif",
      "publishedAt": "2018-12-29T00:24:21Z",
      "content": "STORY WRITTEN FOR CBS NEWS &amp; USED WITH PERMISSION Artist’s concept of the New Horizons spacecraft approaching a Kuiper Belt Object. Credit: NASA/JHUAPL/SWRI Three years and a billion miles past Pluto, NASA’s New Horizons probe is on the verge of at least … [+12723 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Eonline.com"
      },
      "author": "Cydney Contreras",
      "title": "Find Out the Cost of Miley Cyrus & Liam Hemsworth’s Wedding - E! NEWS",
      "description": "The total cost for their secret ceremony could have come out to an estimated $17,000",
      "url": "https://www.eonline.com/news/1000057/breaking-down-the-cost-of-miley-cyrus-and-liam-hemsworth-s-surprisingly-affordable-wedding",
      "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20181126/rs_600x600-181226132037-600x600-miley-cyrus-liam-hemsworth-instagram-gj-12-26-18.jpg?fit=around|600:467&crop=600:467;center,top&output-quality=90",
      "publishedAt": "2018-12-29T00:24:00Z",
      "content": "Florals : estimated $1,500 Based on estimates of similar flower arches, bouquets, etc. Miley could've dolled out up to $1,500 for the gorgeous and delicate arrangements. Liam's boutonnière was made of white anemone, which nicely matched his brides bouquet. Fo… [+676 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "New York Post",
      "title": "Usher files for divorce from Grace Miguel after months of separation - Fox News",
      "description": "Usher has filed for divorce from estranged wife Grace Miguel nine months after announcing their separation.",
      "url": "https://www.foxnews.com/entertainment/usher-files-for-divorce-from-grace-miguel-after-months-of-separation",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2018/12/usher-grace.jpg",
      "publishedAt": "2018-12-29T00:14:40Z",
      "content": "Usher has filed for divorce from estranged wife Grace Miguel nine months after announcing their separation. Documents obtained by The Blast show the 40-year-old R&amp;B crooner made the divorce official on Friday in Georgia. The couple first broke the news of… [+755 chars]"
  },
  {
      "source": {
          "id": "cbs-news",
          "name": "CBS News"
      },
      "author": "Paula Reid",
      "title": "Trump lowers demand for border wall funding - CBS News",
      "description": "Mick Mulvaney said he expected the shutdown to go on for a while, but revealed the president has come down from his initial asking price",
      "url": "https://www.cbsnews.com/news/trump-lowers-demand-for-border-wall-funding/",
      "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2018/12/27/a35d20f3-337a-4518-aa27-04c7d08c454c/thumbnail/1200x630g2/a49bc078eb54fe2ef7742a9b07039417/2018-12-27t005221z-1133084418-rc1a001ff100-rtrmadp-3-usa-trump-1.jpg",
      "publishedAt": "2018-12-29T00:10:00Z",
      "content": "On the seventh day of the partial government shutdown, President Trump on Friday threatened to shut down the U.S.-Mexico border if Democrats refuse his monetary demands to build his long-promised wall. Acting White House Chief of Staff Mick Mulvaney said he e… [+2045 chars]"
  },
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Tasha Robinson",
      "title": "The Reddit detectives are hard at work decoding Black Mirror: Bandersnatch - The Verge",
      "description": "Bandersnatch, the latest episode of Charlie Brooker’s technological-nightmare series Black Mirror, has arrived on Netflix, and it’s an interactive film full of story branches and dead ends. Here are the narrative maps, Easter egg guides, and lists of codes an…",
      "url": "https://www.theverge.com/2018/12/28/18159516/black-mirror-bandersnatch-interactive-choice-maps-endings-easter-eggs-netflix-charlie-brooker",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/TZyTCVa97JklAh6pRCH9Hq4hZ1E=/0x146:1483x922/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13654937/BM_Bandersnatch_Vertical_Main_PRE_RGB.jpg",
      "publishedAt": "2018-12-29T00:09:37Z",
      "content": "Early in the morning on Friday, December 28th, Netflix slipped its viewers a late Christmas present: a new episode of Charlie Brookers technological-dystopia anthology series Black Mirror, in the form of an interactive movie called Bandersnatch. Its arrival d… [+3779 chars]"
  },
  {
      "source": {
          "id": "usa-today",
          "name": "USA Today"
      },
      "author": "Bill Theobald, Michael Collins",
      "title": "How long will the federal shutdown last? Here are lessons from previous budget battles. - USA TODAY",
      "description": "The government shutdown, which is moving into its second week, is not the longest in history. Here's how some past budget fights have played out.",
      "url": "https://www.usatoday.com/story/news/politics/2018/12/28/government-shutdown-how-long-last/2432128002/",
      "urlToImage": "http://www.gannett-cdn.com/-mm-/bfc0d9bec775f48e7fc56a3cebd011a24477ffdd/c=0-31-620-381/local/-/media/2014/12/16/FederalTimes/FederalTimes/635543341624370263-slide7.jpg?width=3200&height=1680&fit=crop",
      "publishedAt": "2018-12-28T23:59:00Z",
      "content": "President Trump has threatened to completely shut down the southern border.The government is on the seventh day of a total shutdown as the result of a showdown over funding for a border wall. Buzz60 The U.S. Capitol Building in Washington, D.C. (Photo: Erik S… [+4662 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Npr.org"
      },
      "author": "Eric Whitney",
      "title": "FCC Investigates Widespread CenturyLink Outage That Disrupted 911 Service - NPR",
      "description": "The FCC chairman called CenturyLink's widespread telecom outage unacceptable and says an investigation will start immediately.",
      "url": "https://www.npr.org/2018/12/28/680747866/fcc-investigates-widespread-centurylink-outage-that-disrupted-911-service",
      "urlToImage": "https://media.npr.org/assets/img/2018/12/28/gettyimages-171337656_wide-c6bb81cfaf284b275f2a12d180ec5b6b55609389.jpg?s=1400",
      "publishedAt": "2018-12-28T23:36:00Z",
      "content": "The Federal Communications Commission has launched an investigation into a phone and Internet outage that disrupted 911 services across the country starting Thursday. The telecommunications giant CenturyLink, based in Monroe, La., says the outage began at 8:1… [+2920 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Fox59.com"
      },
      "author": "http://www.facebook.com/Fox59News",
      "title": "3rd flu-related death of the season occurs in Indiana - FOX 59 Indianapolis",
      "description": "INDIANAPOLIS, Ind. - Indiana has now recorded its third influenza-related death of the 2018-19 season, according to the Indiana State Department of Health's weekly influenza report\r\n\nThe department did not release any details Friday on the person who died.\r\n\n…",
      "url": "https://fox59.com/2018/12/28/3rd-flu-related-death-of-the-season-occurs-in-indiana/",
      "urlToImage": "https://tribwxin.files.wordpress.com/2018/12/hospital-hallway.jpg?quality=85&strip=all",
      "publishedAt": "2018-12-28T23:28:00Z",
      "content": "(iStock / Getty Images) INDIANAPOLIS, Ind. – Indiana has now recorded its third influenza-related death of the 2018-19 season, according to the Indiana State Department of Health’s weekly influenza report The department did not release any details Friday on t… [+360 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Nypost.com"
      },
      "author": "Amanda Woods",
      "title": "Newark Airport passengers may have been exposed to measles on Christmas Eve - New York Post ",
      "description": "This is not a Christmas gift anyone would want. Fliers who passed through Newark Airport on Christmas Eve may have been exposed to measles: A traveler who arrived from Brussels that day was confirm…",
      "url": "https://nypost.com/2018/12/28/newark-airport-passengers-may-have-been-exposed-to-measles-on-christmas-eve/",
      "urlToImage": "https://thenypost.files.wordpress.com/2018/12/181228-newark-measles.jpg?quality=90&strip=all&w=1200",
      "publishedAt": "2018-12-28T23:28:00Z",
      "content": "This is not a Christmas gift anyone would want. Fliers who passed through Newark Airport on Christmas Eve may have been exposed to measles: A traveler who arrived from Brussels that day was confirmed to have the contagious disease, New Jersey’s Department of … [+1439 chars]"
  },
  {
      "source": {
          "id": "cnbc",
          "name": "CNBC"
      },
      "author": "Michelle Fox",
      "title": "Elon Musk and Tesla have 'outmaneuvered' the SEC, says management guru Jeff Sonnenfeld - CNBC",
      "description": "Tesla appointed an Elon Musk \"clone\" in Larry Ellison, says Yale's Jeff Sonnenfeld. \"The SEC has been had on this one.\"",
      "url": "https://www.cnbc.com/2018/12/28/elon-musk-and-tesla-have-outmaneuvered-the-sec-says-jeff-sonnenfeld.html",
      "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/08/16/105401105-1534436015158musk.1910x1000.jpg",
      "publishedAt": "2018-12-28T23:06:10Z",
      "content": "Tesla and CEO Elon Musk agreed in September to appoint a new chairman and two independent board members after the SEC accused Musk of misleading investors with a tweet about taking the company private at $420 a share. Sonnenfeld called Ellison, the co-founder… [+1465 chars]"
  },
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Sean Hollister",
      "title": "Essential all but confirms it’s making another phone - The Verge",
      "description": "The Essential Phone, from Android co-founder Andy Rubin, had so much potential — but its journey may be coming to an end. Today, the company has announced that it’s discontinuing the device. But Essential is all but confirming that a new phone will take its p…",
      "url": "https://www.theverge.com/circuitbreaker/2018/12/28/18159598/essential-phone-discontinued-new-mobile-product-confirmed",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/yD0ls0FUB1t9lamxLkbJmj5v2u0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9070867/vpavic_170816_1924_0192.jpg",
      "publishedAt": "2018-12-28T23:04:16Z",
      "content": "The Essential Phone, from Android co-founder Andy Rubin, seemed to have so much unrealized potential but its journey may be coming to an end. Today, the company has announced (via 9to5Google ) that its discontinuing the device. Droid Life spotted earlier toda… [+1770 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Cheatsheet.com"
      },
      "author": "michelle-kapusta",
      "title": "What Are Prince George, Princess Charlotte and Prince Louis' Zodiac Signs? - The Cheat Sheet",
      "description": "Find out what Prince George, Princess Charlotte, and Prince Louis' zodiac signs are and what they reveal about the royal children.",
      "url": "https://www.cheatsheet.com/entertainment/what-are-prince-george-princess-charlotte-and-prince-louis-zodiac-signs.html/",
      "urlToImage": "https://www.cheatsheet.com/wp-content/uploads/2018/10/Prince-William-Kate-Middleton-and-their-children--e1539885583313-640x497.jpg",
      "publishedAt": "2018-12-28T23:00:55Z",
      "content": "Prince William, Kate Middleton, Prince George, Princess Charlotte, and Prince Louis | Dominic LipinskiI/AFP/Getty Images Prince William and Kate Middleton ‘s three children are absolutely adorable and the public just loves learning new things about the young … [+2952 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Marketwatch.com"
      },
      "author": "Jessica Marmor Shaw, Terrence Horan",
      "title": "Here’s just how crazy this week was for the stock market, in one big chart - MarketWatch",
      "description": "This Christmas really was one for the history books. Whiplash, anyone?",
      "url": "https://www.marketwatch.com/story/heres-just-how-crazy-this-week-was-for-the-stock-market-in-one-big-chart-2018-12-28",
      "urlToImage": "http://s.marketwatch.com/public/resources/MWimages/MW-HB020_weekin_ZG_20181228162602.jpg",
      "publishedAt": "2018-12-28T21:52:00Z",
      "content": "This Christmas week really was one for the history books. Whiplash, anyone? On Monday, the Dow Jones Industrial DJIA, -0.33%, the S&amp;P 500 SPX, -0.12% and the Nasdaq Composite COMP, +0.08% all booked their ugliest-ever plunges in the shortened Christmas Ev… [+5501 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Valleycentral.com"
      },
      "author": "CBS 4 News",
      "title": "Something’s brewing at SpaceX launch facility near Boca Chica State Park - KGBT-TV",
      "description": "Something big is brewing at the SpaceX South Texas launch facility near Boca Chica State Park. SpaceX Chief Executive Elon Musk posted a video and picture on Twitter on Christmas Eve. The first shows the &ldquo;Stainless Steel Starship. \"Another post from Mus…",
      "url": "http://valleycentral.com/news/local/somethings-brewing-at-spacex-launch-facility-near-boca-chica-state-park",
      "urlToImage": "http://static-27.sinclairstoryline.com/resources/media/31cd45af-9833-4b32-8200-ffcc2e328267-large16x9_spacecraft.jpg?1546033735750",
      "publishedAt": "2018-12-28T21:49:34Z",
      "content": "Something big is brewing at the SpaceX South Texas launch facility near Boca Chica State Park. SpaceX Chief Executive Elon Musk posted a video and picture on Twitter on Christmas Eve. The first shows the “Stainless Steel Starship.\" Another post from Musk on D… [+761 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "George Dvorsky",
      "title": "Report: Scientists in China Are Losing Track of Gene-Edited CRISPR Patients - Gizmodo",
      "description": "Gene therapies are very much at their preliminary stages of development, so it would make sense to keep tabs on patients whose DNA has been modified via the innovative CRISPR technique. For some scientists in China, however, this is apparently not a priority.",
      "url": "https://gizmodo.com/report-scientists-in-china-are-losing-track-of-gene-ed-1831367684",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--ybBNSoR3--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/v8grcmraf36nuhywbcl4.jpg",
      "publishedAt": "2018-12-28T21:40:00Z",
      "content": "Gene therapies are very much at their preliminary stages of development, so it would make sense to keep tabs on patients whose DNA has been modified via the innovative CRISPR technique. For some scientists in China, however, this is apparently not a priority.… [+4891 chars]"
  },
  {
      "source": {
          "id": "the-hill",
          "name": "The Hill"
      },
      "author": "Miranda Green",
      "title": "Ocasio-Cortez, progressives express disappointment with climate panel | TheHill - The Hill",
      "description": "Democrats are getting their special committee on climate change next year, but it won't be the plan climate activists and Rep.-elect Alexandria Ocasio-Cortez (D-N.Y.) championed.",
      "url": "https://thehill.com/policy/energy-environment/423146-ocasio-cortez-progressives-express-disappointment-with-climate",
      "urlToImage": "https://thehill.com/sites/default/files/ocasiocortezalexandria_111418gn_lead.jpg",
      "publishedAt": "2018-12-28T20:43:02Z",
      "content": "Democrats are getting their special committee on climate change next year, but it won't be the plan climate activists and Rep.-elect Alexandria Ocasio-Cortez Alexandria Ocasio-Cortez Bloomberg: 2020 candidates better darn well have climate plan Ocasio-Cortez … [+7916 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Jamie Ehrlich, CNN",
      "title": "Maine governor deems congressional election 'stolen' while certifying result - CNN",
      "description": "Gov. Paul LePage certified the election results for Maine's 2nd Congressional District after a recount and legal battle dragged out the final result in the race for almost two months, cementing a Democratic victory.",
      "url": "https://www.cnn.com/2018/12/28/politics/maine-governor-certifies-congressional-election/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/161011104302-maine-gov-paul-lepage-super-tease.jpg",
      "publishedAt": "2018-12-28T20:36:00Z",
      "content": "Washington (CNN) Gov. Paul LePage certified the election results for Maine's 2nd Congressional District after a recount and legal battle dragged out the final result in the race for almost two months, cementing a Democratic victory. But, LePage -- a Republica… [+2354 chars]"
  }
]

export default dummy_articles;
