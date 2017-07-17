// -----------------------------------------------------------------
// Components
// -----------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EnvVariables } from "./environment/env.token";
// -----------------------------------------------------------------
// Pages
// -----------------------------------------------------------------
import { HomePage } from '../pages/home/home';
// -----------------------------------------------------------------
// Providers
// -----------------------------------------------------------------
import { ComunProvider } from "../providers/comun/comun";
import { BackProvider } from "../providers/back/back";
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'ConectPage'

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, @Inject(EnvVariables) private env, private comun: ComunProvider, private back: BackProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(env.config)
      firebase.database().ref('restaurante').child(this.back.idRestaurante).child('datos').child('nombre').once('value', snap => {
        this.back.nombre = snap.val()
      })
      
    });
  }
}

