"use strict";
import {inject, LogManager} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

/**
 * The top-level application entry point.
 */
@inject(Router)
export class App {

  /**
   * The application name.
   * @type {string}
   */
  name = 'Aurelia App';

  /**
   * Current timestamp
   * @type {Date}
   */
  now = new Date();

  /**
   * Creates a new instance of this object.
   * @param router the root router.
   */
  constructor(router) {
    var log = this.log = LogManager.getLogger('app');
    log.debug('Configuring application.');
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        {route: ['', 'welcome'], moduleId: './welcome/welcome', nav: true, title: 'Welcome'}
      ]);
    });
  }
}
