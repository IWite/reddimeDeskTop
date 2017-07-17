import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturaPage } from "./factura";
import { MipipePipe } from '../../pipes/mipipe/mipipe';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
    imports: [
        IonicPageModule.forChild(FacturaPage),
        CurrencyMaskModule
    ],
    exports: [FacturaPage],
    declarations: [FacturaPage,MipipePipe]
})
export class FacturaModule { }