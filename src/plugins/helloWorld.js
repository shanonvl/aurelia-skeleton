import {LogManager} from 'aurelia-framework';

var pluginId = 'plugins.helloWorld',
    // created in the install function.
    aurelia, config = {}, log;

export function install(_aurelia,_config) {
  [aurelia,config, log] = [_aurelia, _config || {}, LogManager.getLogger(pluginId)];
  log.debug('Installing plugin: ',pluginId,', config: ',config);
}
