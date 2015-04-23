import {LogManager} from 'aurelia-framework';

/**
 * The plugin id.
 * @type {string}
 */
var pluginId = 'plugins.helloWorld',
    // top-level scope pointers to variables passed/created in the install function.
    aurelia, config = {}, log = LogManager.getLogger('plugins.helloWorld');

/**
 * The aurelia entry point / bootstrap function.
 * @param _aurelia the `aurelia` object
 * @param _config the config object ie. second argument here `.plugin('path/to/this/plugin',{ ... })`
 * @return promise or `null`.
 */
export function install(_aurelia,_config) {
  [aurelia,config] = [_aurelia, _config || {}];
  log.debug('Installing plugin: ',pluginId,', config: ',config);
}
