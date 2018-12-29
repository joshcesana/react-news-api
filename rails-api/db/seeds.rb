saves = [
  {
    article_id: "aklsjdfasf",
    source: "Engadget",
    author: "Mariella Moon",
    title: "Netflix kills in-app subscriptions on Apple hardware - Engadget",
    description: "Netflix completely removes the option to pay via iTunes.",
    url: "https://www.engadget.com/2018/12/28/netflix-kills-apple-in-app-subscription/",
    image_url: "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D4256%252C2832%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1065%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2018-12%252Fcc4106f0-0b00-11e9-befe-33925b4f6233%26client%3Da1acac3e1b3290917d92%26signature%3D45b2af5f01011527a46bc9356a007f7544cb3be6&client=amp-blogside-v2&signature=258f14046cc9b3ea9314161fd3cf0aa78bb97d50",
    publish_date: "2018-12-29T02:55:04Z"
  },
  {
    article_id: "lkjagasdfe",
    source: "Eonline.com",
    author: "Cydney Contreras",
    title: "Find Out the Cost of Miley Cyrus & Liam Hemsworth’s Wedding - E! NEWS",
    description: "The total cost for their secret ceremony could have come out to an estimated $17,000",
    url: "https://www.eonline.com/news/1000057/breaking-down-the-cost-of-miley-cyrus-and-liam-hemsworth-s-surprisingly-affordable-wedding",
    image_url: "https://akns-images.eonline.com/eol_images/Entire_Site/20181126/rs_600x600-181226132037-600x600-miley-cyrus-liam-hemsworth-instagram-gj-12-26-18.jpg?fit=around|600:467&crop=600:467;center,top&output-quality=90",
    publish_date: "2018-12-29T00:24:00Z"
  }
]

saves.each {|save| Save.create(save)}
