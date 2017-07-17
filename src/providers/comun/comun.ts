// -----------------------------------------------------------------
// Components
// -----------------------------------------------------------------
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
// -----------------------------------------------------------------
// Native
// -----------------------------------------------------------------


@Injectable()
export class ComunProvider {

  // -----------------------------------------------------------------
    // Atributos
    // -----------------------------------------------------------------


    // -----------------------------------------------------------------
    // Constructor
    // -----------------------------------------------------------------
    constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController) { }

    // -----------------------------------------------------------------
    // Metodos
    // -----------------------------------------------------------------


    /**
    * show a native menssage in Ionic 
    * @param {string} title
    * @param {string} msg
    * @memberOf UnregisteredPage
    */
    showAlert(title: string, msg: string) {
        let alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: ["Aceptar"]
        })
        alert.present()
    }


	/**
	 * Show a native loading popup in ionic 
	 * @param {string} msg
	 * @returns {Loading} isntancia de la ventana de cargando
	 * @memberOf ComunService
	 */
    showLoad(msg: string): Loading {
        let loader = this.loadingCtrl.create({
            content: msg,
            dismissOnPageChange: true
        });
        return loader
    }
}
