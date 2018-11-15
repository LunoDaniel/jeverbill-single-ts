import { ChoppPageModule } from './../pages/chopp/chopp.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DrinksProvider } from '../providers/drinks/drinks';
import { DrinksPageModule } from '../pages/drinks/drinks.module';
import { ChoppsProvider } from '../providers/chopps/chopps';
import { HttpClientModule } from '@angular/common/http';
import { BaseProvider } from '../providers/base/base';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    DrinksPageModule,
    ChoppPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrinksProvider,
    ChoppsProvider,
    BaseProvider
  ]
})
export class AppModule {}
