import { Injectable, Injector } from '@angular/core';
import { BaseProvider } from '../base/base';

/*
  Generated class for the DrinksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DrinksProvider extends BaseProvider{

  constructor(injector: Injector) {
    super(injector);
  }

}
