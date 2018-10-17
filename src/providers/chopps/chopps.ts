import { Injectable, Injector } from '@angular/core';
import { BaseProvider } from '../base/base';
import { JeverChopp } from '../../domain/chopps/JeverChopp';

/*
  Generated class for the ChoppsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChoppsProvider extends BaseProvider{
  private choppList: Array<JeverChopp>;

  constructor(injector: Injector) {
    super(injector);
    console.log('Hello ChoppsProvider Provider');
  }

  public getAllChopps(){
    return this.httpGet('chopp/list').then(data => {
        this.choppList = data;
        return this.choppList;
    });
  }

}
