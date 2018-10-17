import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoppPage } from '../chopp/chopp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public homePage = 'HomePage';
  
  constructor(public navCtrl: NavController) {
  }

  public openBillPage(){
    
  }
  public openChoppPage(){
    this.navCtrl.push(ChoppPage);
  }
  public openDrinkPage(){}
  public openFoodPage(){}
  public closeMenu(){}
}
