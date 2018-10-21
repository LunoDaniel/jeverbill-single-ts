import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChoppsProvider } from '../../providers/chopps/chopps';
import { JeverChopp } from '../../domain/chopps/JeverChopp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public chopplist: Array<JeverChopp>;

  constructor(public navCtrl: NavController, private choppProvider:  ChoppsProvider) {
    this.chopplist= new Array<JeverChopp>();
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
