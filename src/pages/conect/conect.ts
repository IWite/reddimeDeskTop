import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ComunProvider } from "../../providers/comun/comun";
import { BackProvider } from "../../providers/back/back";
import { HomePage } from "../home/home";
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';

@IonicPage()
@Component({
    selector: 'page-conect',
    templateUrl: 'conect.html',
})
export class ConectPage {
    codigo: string

    constructor(public navCtrl: NavController, public navParams: NavParams, private comun: ComunProvider, private back: BackProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConectPage');
    }

    conectar() {
        if (this.codigo == null || this.codigo == '')
            this.comun.showAlert('Error', "Debes colocar un código")
        else {
            let load = this.comun.showLoad('Cargando...')
            load.present()
            firebase.database().ref('device').child(this.codigo).once('value', snap => {
                let value = snap.val()
                if(value==null){
                    load.dismiss()
                    this.comun.showAlert('Error','Código no valido')
                }
                else{
                    if(value.conect != 1){
                        load.dismiss()
                        this.comun.showAlert('Error','EL dispositivo esta ocupado')
                    }
                    else{
                        firebase.database().ref('device').child(this.codigo).child('conect').set(2)
                        this.back.conectado = true
                        this.back.codigo = this.codigo
                        this.navCtrl.setRoot(HomePage)
                    }
                }
            })
        }

    }

}
