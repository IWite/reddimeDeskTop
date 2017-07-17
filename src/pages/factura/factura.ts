import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import { BackProvider } from "../../providers/back/back";
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-factura',
  templateUrl: 'factura.html',
})
export class FacturaPage {

  valor:any = 0

  constructor(public navCtrl: NavController, public navParams: NavParams, private back:BackProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaPage');
  }

  enviar(){
    console.log(this.valor)
    let info = {
      rest: this.back.idRestaurante,
      valor: this.valor
    }
    firebase.database().ref('device').child(this.back.codigo).child('chat').set(info,a=>{
      firebase.database().ref('device').child(this.back.codigo).child('conect').set(3)
      this.navCtrl.push('EsperandoPage')
    })
  }

}
