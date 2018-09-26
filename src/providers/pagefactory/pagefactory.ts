import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DrinksPage } from '../../pages/drinks/drinks';

@Injectable()
export class PagefactoryProvider {

  constructor(private navCtrl: NavController) {
    console.log('Hello PagefactoryProvider Provider');
  }


  public pageFactory(pagename: string) {
    if(pagename == 'DrinskPage'){
        this.navCtrl.push(DrinksPage);
    }
  }


}
