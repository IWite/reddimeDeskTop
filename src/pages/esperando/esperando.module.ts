import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsperandoPage } from "./esperando";

@NgModule({
    imports: [IonicPageModule.forChild(EsperandoPage)],
    exports: [EsperandoPage],
    declarations: [EsperandoPage]
})
export class EsperandoModule { }