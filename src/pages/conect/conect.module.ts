import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConectPage } from "./conect";

@NgModule({
    imports: [IonicPageModule.forChild(ConectPage)],
    exports: [ConectPage],
    declarations: [ConectPage]
})
export class ConectModule { }