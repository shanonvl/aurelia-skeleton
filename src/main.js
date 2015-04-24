"use strict";
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

import {SprintfConsoleAppender} from 'shanonvl/aurelia-logging-console';
import {I18N} from 'zewa666/aurelia-i18next';

/**
 * Application bootstrap function, called via the `aurelia-app` attribute in the `<body>` tag.
 * @param aurelia aurelia object
 */
export function configure(aurelia) {

  LogManager.addAppender(new ConsoleAppender());
  LogManager.setLevel(LogManager.levels.debug);

  aurelia.use
    .standardConfiguration()
    // sample plugin: http://aurelia.io/docs.html#plugins
    .plugin("./plugins/helloWorld",{
      foo:'bar',
      bar:'BAZ!'
    })
    .plugin("./plugins/highcharts/index",{
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
