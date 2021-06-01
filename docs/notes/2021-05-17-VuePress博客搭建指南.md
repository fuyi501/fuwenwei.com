---
title: VuePress 博客搭建指南
tags: VuePress 博客
---

# VuePress 博客搭建指南

::: tip 说明
使用 VuePress 快速搭建一个好看的个人博客。
:::

## 快速开始

> 在开始之前，先看看效果图和前期的准备。

### 效果预览

<img src="http://fww.andata.com.cn/blog/20210517175803.png" alt="image-20210517175803929" style="zoom:50%;" />

### 环境准备

博客搭建使用了以下工具：

- [VuePress](https://vuepress.vuejs.org/zh/)  Vue 驱动的静态网站生成器。
- [AntDocs](https://antdocs.vercel.app/) 一款 Ant Design 设计风格的 VuePress 主题。
- [VuePress-Creator](https://zpfz.github.io/vuepress-creator/zh/) 一款为 VuePress 项目准备的轻量级脚手架。

参考了如下博客教程：

- [君哥的学习笔记](https://book.hliedu.com/) 

### 安装 vuepress-creator

`vuepress` 安装配置博客还是很麻烦的，对于新手来说不是很友好，所以直接使用 `vuepress-creator` 来创建博客项目就非常方面，省去了很多创建文件和配置的过程，可以简化很多工作。

为了方便以后快速创建 VuePress 项目，这里推荐使用 `yarn` 进行全局安装：

```sh
# yarn 安装 vuepress-creator
yarn global add vuepress-creator

# npm 安装 vuepress-creator
npm install -g vuepress-creator
```

### 创建项目

在命令行窗口输入以下命令开始创建项目：

```sh
vuepress-creator init projectName
```

其中，可以把 `projectName` 替换为你想要的名称。回车后，会跳出一个选项：

```sh
# 为 VuePress 选择一个主题？ 默认：Default
Pick a theme for VuePress?
> Default
  AntDocs (Ant Design style)
```

选择完毕后，脚手架将自动进行一系列的操作，直到配置完毕。再此期间，请你耐心等待。

### 开发运行

打开已经配置完毕的项目，在命令行窗口输入以下命令：

```sh
yarn dev # 或者：npm run dev
```

### 生产运行

要生成静态的 HTML 文件，运行：

```sh
yarn build # 或者：npm run build
```

生成的静态文件会存放在 `.vuepress/dist`，你也可以自定义生成路径，但实际上一般不需要修改它。

这里推荐使用 [VS Code](https://code.visualstudio.com/) 编辑器，对执行 `package.json` 文件内的脚本命令很友好，同时也支持编写 `.md` 文档。

## 基础配置

安装完成后，会生成一个标准的模版，可以按照自己的想法进行配置。

### 首页配置

首页配置文件为 `docs` 下面的 `README.md` 文件：

路径：`docs/README.md`

```markdown
---
home: true
heroImage: /assets/logo.png
actionBtn:
  text: 快速开始
  link: /guide/
  type: primary
  ghost: false
  size: large
preactionBtn:
  text: Github
  link: https://github.com/fuyi501
  type: primary
  ghost: true
  size: large
features:
- title: 开源精神
  details: 崇尚 Geek 精神与开源分享文化。
- title: 热爱生活
  details: 平时喜欢看看书，玩玩游戏。没事跑跑步，看看电影，聚个餐。
- title: 奋斗不止
  details: 生命不息，奋斗不止。
footer: MIT Licensed | Copyright © 2021 Fuwenwei | <a href="http://beian.miit.gov.cn/" target="_blank">自行填写ICP备案号</a>
---

::: warning 声明

本站主要用来便于自己学习回顾的，有些内容我会直接复制过来供自己学习，如有侵权请联系我删除。

:::

::: tip

时间就像一条河流，载着我们顺流而下，遇到现实，需要决策，但我们无法停留，也无法回避，只能以最好的方式应对。

<br>

无论人生上到哪一个台阶，阶下有人在仰望你，阶上亦有人在俯视你。 你抬头自卑，低头自得，唯有平视，才能看见真正的自己。

<br>

当你接触的人越多，层面越高，你会发现： 越高端、越有教养的人大都相互支持，抱团发展，因为你好了大家都好。 越低端、越缺德行的人，越喜欢诋毁嫉妒，拆台，鄙视，因为我不好，我也不想让你好。 所以，和一群有同样格局和思维的人一起前行才是最重要的。

<br>

决定你人脉资源的，其实是你的” 被利用价值”。 当你的利用价值越大，对别人的作用越大，别人就越会帮你。 与其把时间花在混个脸熟上面，不如花时间提高自己的个人价值。

<br>

人若活的不自由，最大的原因是思想不自由。不擅长独立思考，那么总会被周围的思想带着走。 因为自由不是你想做什么就做什么，而是你不想做什么就不做什么。

<br>

在薄情的世界里，深情的活着。

<br>

在这个世界上别太依赖任何人，因为当你在黑暗中挣扎时，连你的影子都会离开你。
:::
```

### 核心配置

核心配置文件为 `.vuepress` 下面的 `config.js` 文件：

路径：`docs/.vuepress/config.js`

```js
module.exports = {
  theme: "antdocs",
  title: "记录我的生活",
  description: "悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
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
    // sidebarDepth: 0,
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
    }
  }
};
```

### 导航栏配置

导航栏配置文件为 `.vuepress/config` 下面的 `nav.js` 文件：

路径：`docs/.vuepress/config/nav.js`

```js
module.exports = [
  {
    text: "首页", link: "/"
  },
  {
    text: "全栈进阶", link: "/full-stack/",
    items: [
      { text: '前端进阶', link: '/full-stack/web/' },
      { text: '后端进阶', link: '/full-stack/back-end/' }
    ]
  },
  {
    text: "学习笔记", link: "/notes/"
  },
  {
    text: "常用工具", link: "/tools/"
  },
  // {
  //   text: "项目",
  //   link: "/projects/"
  // }
];
```

### 侧边栏配置

导航栏配置文件为 `.vuepress/config` 下面的 `sidebar.js` 文件：

路径：`docs/.vuepress/config/sidebar.js`

```js
module.exports = {
  // 全栈进阶
  "/full-stack/web": require("../../full-stack/web/sidebar_web"),
  "/full-stack/back-end": require("../../full-stack/back-end/sidebar_backend"),

  // 学习笔记
  "/notes": require("../../notes/sidebar_notes"),

  // 常用工具
  "/tools": require("../../tools/sidebar_tools"),
};
```

- `/full-stack/web`：该 key 是与上述的 `nav` 中 link 对应，在请求 `nav` 时会自动切换当前的侧边目录，所以需要该配置。其他同理。
- 后面的 `require` 表示引入一个指定目录的 `sidebar.js` 文件，其本身可以直接写在这里，但为了方便维护我们需要将每个模块的侧边栏 js 抽取出来，单独存放在内容模块的目录下。

所以侧边栏是有两个配置文件，一个是 `docs/.vuepress/config/sidebar.js`全局的侧边栏配置文件，一个是对应内容模块下的配置文件。比如 `/full-stack/web` 对应的 `require("../../full-stack/web/sidebar_web")` 如下：

```js
module.exports = [
  {
    title:'JavaScript',
    collapsable: true,
    children:[
      '/full-stack/web/javascript/2017-05-01-es6',
    ]
  }
];
```

参数解析

- `title`：表示侧边栏大标题
- `collapsable`：是否可收缩
- `children`：具体的`.md` 文件，这里无需指定后缀

还有一种侧边栏的写法如下，这种侧边栏没有侧边栏的大标题，会直接显示文章标题，如果你想在侧边栏进行分类展示，则使用上面的侧边栏写法。

```js
module.exports = [
	'/guide/',
	'getting-started',
	'changelog'
];
```

**带分类的侧边栏如下所示：**



<img src="http://fww.andata.com.cn/blog/20210517175545.png" alt="image-20210517175545416" style="zoom:50%;" />

------

**不带分类的侧边栏如下所示：**

<img src="http://fww.andata.com.cn/blog/20210517175624.png" alt="image-20210517175624136" style="zoom:50%;" />

------

### 静态资源配置

静态资源是最重要的一部分，比如图片，比如 `js`，比如 `css`

vuepress 程序默认的静态资源存放在 `/docs/.vuepress/public`，额外的图片、`js`、 `CSS` 等静态资源都存放在 `/docs/.vuepress/public`下，在`/docs/.vuepress/public`下新建 `assets、js、css`目录存放相应的文件即可，引入的时候修改`.vuepress` 下的 `config.js` 

```js
head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ["script", { charset: "utf-8", src: "/js/main.js" }],
  ],
```

如果要修改 `AntDocs` 主题的配色等信息，请参阅 `AntDocs` 主题文档  [https://antdocs.vercel.app/guide/palette.html](https://antdocs.vercel.app/guide/palette.html)。

### Markdown 拓展

`Markdown` 拓展参阅 `VuePress` 官方文档  [https://vuepress.vuejs.org/zh/guide/markdown.html](https://vuepress.vuejs.org/zh/guide/markdown.html)



