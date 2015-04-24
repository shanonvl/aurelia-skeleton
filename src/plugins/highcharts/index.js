import {LogManager} from 'aurelia-framework';
import $ from 'components/jquery';

/**
 * The plugin id.
 * @type {string}
 */
var pluginId = 'plugins.highcharts',
    log = LogManager.getLogger(pluginId),
    defaultConfig = {

    };

/**
 * @namespace plugins.HelloWorldPlugin
 */
class HighchartsPlugin {

  /**
   * Creates a new instance of this object.
   * @param aurelia
   */
  constructor(aurelia) {
    this.aurelia = aurelia;
    this.config = {};
  }

  init(config) {
    $.extend(this.config, config || {});
    log.debug('Initialized plugin: %s, config: %s', this, JSON.stringify(this.config));

    // enables the custom attributes on all pages w/out explicit include.
    this.aurelia.globalizeResources('./attributes/dataHighchartUrl');

    return this;
  }


}

/**
 * The aurelia entry point / bootstrap function.
 * @param aurelia the `aurelia` object
 * @param config the config object ie. second argument here `.plugin('path/to/this/plugin',{ ... })`
 * @return promise or `null`.
 */
export function install(aurelia, config) {

  return new Promise((resolve, reject) => {
    try {
      resolve(new HighchartsPlugin(aurelia).init(config));
    }
    catch (e) {
      reject(e);
    }
  });

}
