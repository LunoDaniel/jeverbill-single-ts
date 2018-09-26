import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoppPage } from './chopp';

@NgModule({
  declarations: [
    ChoppPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoppPage),
  ],
})
export class ChoppPageModule {}
