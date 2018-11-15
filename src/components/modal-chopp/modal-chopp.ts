import { Component } from '@angular/core';

/**
 * Generated class for the ModalChoppComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-chopp',
  templateUrl: 'modal-chopp.html'
})
export class ModalChoppComponent {

  text: string;

  constructor() {
    console.log('Hello ModalChoppComponent Component');
    this.text = 'Hello World';
  }

}
