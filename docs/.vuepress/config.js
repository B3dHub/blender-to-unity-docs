const { description, repository } = require('../../package')

module.exports = {
  // base: '/blender-to-unity-docs/',
  title: 'Blender to Unity',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/img/UN_32.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    nav: [
      // {
      //   text: 'Home',
      //   link: '',
      // },
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            'introduction/',
            'introduction/preference',
          ]
        },
        {
          title: 'Tool',
          collapsable: false,
          children: [
            'tool/',
          ]
        },
        {
          title: 'Collider',
          collapsable: false,
          children: [
            'collider/',
          ]
        },
        {
          title: 'Lod',
          collapsable: false,
          children: [
            'lod/',
          ]
        },
        {
          title: 'Export',
          collapsable: false,
          children: [
            'export/',
          ]
        },
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
