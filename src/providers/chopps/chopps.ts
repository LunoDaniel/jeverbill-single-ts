import { Injectable, Injector } from '@angular/core';
import { BaseProvider } from '../base/base';

/*
  Generated class for the ChoppsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChoppsProvider extends BaseProvider{
  private choppList: any;

  constructor(injector: Injector) {
    super(injector);
    console.log('Hello ChoppsProvider Provider');
  }

  public getAllChopps(){
    return this.httpGet().then(data => {
        this.choppList = data;
        return this.choppList;
    });
  }

}
