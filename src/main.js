"use strict";
import {I18N} from 'zewa666/aurelia-i18next';

/**
 * Application bootstrap function, called via the `aurelia-app` attribute in the `<body>` tag.
 * @param aurelia aurelia object
 */
export function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // sample plugin: http://aurelia.io/docs.html#plugins
    .plugin("./plugins/helloWorld",{
      foo:'bar',
      bar:'BAZ!'
    })
    .plugin('zewa666/aurelia-i18next', (instance) => {
        // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
        instance.setup({
          debug : true,
          resGetPath : 'dist/i18n/__lng__/__ns__.json',
          fallbackLng : 'en',
          getAsync : true,
          lng : 'en',
          lowerCaseLng: true,
          ns:'common',
          sendMissing : false
        });
      });

  aurelia.start().then(a => a.setRoot());
}
