module.exports = [
  {
    text: 'Home', link: '/guide/', icon: 'reco-home'
  },
  {
    text: 'Technology', link: '/技术文章/', icon: 'reco-document',
    items: [
      {
        text: '前端基础',
        items: [
          { text: 'HTML', link: '/技术文章/HTML篇/HTML.md' },
          { text: 'JavaScript', link: '/技术文章/JavaScript篇/JavaScript.md' },
          { text: 'CSS', link: '/技术文章/CSS篇/CSS.md' },
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue', link: '/技术文章/vue篇/vue01.md' },
          { text: 'React', link: '/技术文章/react篇/react.md' },
        ]
      },
    ]
  },
  {
    text: 'Project', link: '/生活分享/', icon: 'reco-faq',
    items: [
      { text: 'Vue项目', link: '/生活分享/life' },
      { text: '数据可视化', link: '/生活分享/life' },
      { text: 'React项目', link: '/生活分享/life' },
    ]
  },

  { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
  {
    text: 'About', icon: 'reco-blog',
    items: [
      { text: 'B站', link: 'https://space.bilibili.com/475011384', icon: 'reco-bilibili' },
      { text: '小李不理', link: 'https://space.bilibili.com/475011384', icon: 'reco-blog' },
    ]
  },/**/
  {
    text: 'Git',
    items: [
      { text: 'GitHub', link: 'https://space.bilibili.com/475011384', icon: 'reco-github' },
      { text: 'gitee', link: 'https://space.bilibili.com/475011384', icon: 'reco-mayun' }
    ]
  }
]