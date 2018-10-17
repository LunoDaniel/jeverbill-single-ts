import { ChoppsProvider } from './../../providers/chopps/chopps';
import { JeverChopp } from './../../domain/chopps/JeverChopp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChoppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chopp',
  templateUrl: 'chopp.html',
})
export class ChoppPage {
  public chopplist: Array<JeverChopp>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private choppProvider:  ChoppsProvider) {
    
  }

  public listChopp(){
    this.choppProvider.getAllChopps()
      .then(success.bind(this)).catch(error.bind(this));

    function success(data) {
      this.chopplist = data;
      console.log(this.choppList);
    }

    function error(error) {
      console.log("listService - Error:" + error);
    }
  }

  ionViewDidLoad() {
    this.listChopp();
    console.log('ionViewDidLoad ChoppPage');
  }

}
