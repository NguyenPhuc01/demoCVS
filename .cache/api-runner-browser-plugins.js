module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Computer Vision Vietnam","short_name":"CVS","start_url":"/","icon":"static/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"102b0b762c272c67e3493810c10c9edb"},
    },{
      plugin: require('../node_modules/gatsby-plugin-intl/gatsby-browser.js'),
      options: {"plugins":[],"path":"D:\\CVS\\cvs-demo-web/src/intl","languages":["vi","en"],"defaultLanguage":"vi"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
