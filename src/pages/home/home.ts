import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoppsProvider } from '../../providers/chopps/chopps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public chopplist: any;

  constructor(public navCtrl: NavController, private choppProvider:  ChoppsProvider) {
    this.listChopp();
  }

  public listChopp(){
    this.choppProvider.getAllChopps()
      .then(success.bind(this)).catch(error.bind(this));

    function success(data) {
      this.chopplist = data;
    }

    function error(error) {
      console.log("listService - Error:" + error);
    }
  }
}
