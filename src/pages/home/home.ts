import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackProvider } from "../../providers/back/back";
import { ComunProvider } from "../../providers/comun/comun";
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    nombre:string

    constructor(public navCtrl: NavController, private back: BackProvider, private comun: ComunProvider) {
        this.nombre = this.back.nombre
    }

    irFactura(){
        this.navCtrl.push('FacturaPage')
    }

}
