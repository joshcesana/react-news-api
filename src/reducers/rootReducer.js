const initState = {
  articles: [
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
    }
  ]
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FETCH_SAVES':
      return state;

    default:
      return state;
  }
}

export default rootReducer;
