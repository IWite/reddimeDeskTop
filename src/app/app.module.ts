import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { EnvironmentsModule } from "./environment/env.module";
import { HttpModule } from '@angular/http';

import { ComunProvider } from "../providers/comun/comun";
import { BackProvider } from '../providers/back/back';
import { NumberPipe } from '../pipes/number/number';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EnvironmentsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ComunProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackProvider
  ]
})
export class AppModule {}
