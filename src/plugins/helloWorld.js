"use strict";
import {LogManager} from 'aurelia-framework';
import $ from 'components/jquery';

let log = LogManager.getLogger('plugins.HelloWorldPlugin');

/**
 * @namespace plugins.HelloWorldPlugin
 */
class HelloWorldPlugin {

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
    log.debug('Initialized plugin: %s',this);
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
  new HelloWorldPlugin(aurelia).init(config);
}
