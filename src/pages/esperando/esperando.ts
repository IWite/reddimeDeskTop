import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { BackProvider } from "../../providers/back/back";
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-esperando',
  templateUrl: 'esperando.html',
})
export class EsperandoPage {
  referencia: firebase.database.Reference


  constructor(public navCtrl: NavController, public navParams: NavParams, private back: BackProvider) {
    this.referencia = firebase.database().ref('device').child(back.codigo).child('conect')
    this.referencia.on('value', snap => {
      let status = snap.val()
      if (status == 2) {
        this.referencia.off()
        this.navCtrl.popToRoot()
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsperandoPage');
  }

}
