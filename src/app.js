import {inject, LogManager} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';


@inject(Router)
export class App {
  constructor(router) {
    var log = this.log = LogManager.getLogger('app');
    log.debug('Configuring application.');
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: './welcome/welcome',      nav: true, title:'Welcome' }
      ]);
    });
  }
}
