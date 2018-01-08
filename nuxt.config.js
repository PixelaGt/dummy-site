const path = require('path');

const nuxtConf = {
  srcDir: 'app/',
  build: {
    vendor: ['prismic-javascript', 'prismic-dom', 'lodash'],
    extend (config, ctx) {
     // Excludes /assets/svg from url-loader
     const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
     urlLoader.exclude = [/assets\/svg/];

     // Includes /assets/svg for svg-sprite-loader
     config.module.rules.push({
       test: /\.svg$/,
       include: [
         path.resolve(__dirname, 'app/assets/svg')
       ],
       loader: 'svg-sprite-loader',
       options: {
         runtimeCompat: true
       }
     })

     // Uncomment line below to view webpack rules
    //  console.dir(config.module.rules)
    },
  },

  css: [
    'normalize.css',
    '@/assets/styles/icons.scss',
  ],

  plugins: [
    { src: '~/plugins/events.js', ssr: false },
    { src: '~/plugins/artists.js', ssr: false },
  ]
}

module.exports = nuxtConf;
