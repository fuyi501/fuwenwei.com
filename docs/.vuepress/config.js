module.exports = {
  theme: "antdocs",
  title: "记录我的生活",
  description: "悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }],
    // ["link", { rel: "stylesheet", href: "/css/style.css" }],
    // ["script", { charset: "utf-8", src: "/js/main.js" }],
  ],
  markdown: {
    lineNumbers: false,
    anchor: {
      permalinkBefore: false
    }
  },
  themeConfig: {
    backToTop: true,
    smoothScroll: true,
    logo: "/assets/logo.png",
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebarDepth: 4,
    lastUpdated: "上次更新",
    repo: "https://github.com/fuyi501",
    editLinks: false,
    ads: {
      style: 2,
      image: "http://fww.andata.com.cn/blog/20210517154435.jpg",
      text: "新用户福利享不停，超低价购买云服务。",
      link: "https://www.aliyun.com/1111/new?userCode=5k1w9nti",
      items: [
        {
          text: "新用户福利享不停，超低价购买云服务。",
          image: "http://fww.andata.com.cn/blog/20210517154435.jpg",
          link: "https://www.aliyun.com/1111/new?userCode=5k1w9nti"
        },
        {
          text: "520 云上表白季！",
          image: "http://fww.andata.com.cn/blog/20210517154148.jpg",
          link: "https://www.aliyun.com/activity/daily/yuming&jianzhan?taskCode=jianzhan0510&recordId=null&userCode=5k1w9nti"
        }
      ]
    },
    // ads:{
    //   style: 3,
    //   title: '赞助商',
    //   btnText: '成为赞助商',
    //   msgTitle: '成为赞助商',
    //   msgText: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 AndDocs 文档侧边栏等页面。',
    //   msgOkText: '确定',
    // },
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
};