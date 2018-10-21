import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Drink } from '../../domain/drinks/Drink';

/**
 * Generated class for the DrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  public drink: Drink;
  public drinks: Array<Drink> = new Array();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinksPage');
  }

}
