import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

/**
 * ViewModel for the Welcome component.
 */
@inject(Router)
export class Welcome {

  /**
   * Creates a new instance of this object.
   * @param router component router
   */
  constructor(router) {
    this.router = router;
  }
}
