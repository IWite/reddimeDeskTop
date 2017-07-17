import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BackProvider {

  conectado: boolean = false
  idRestaurante = 'WvSMuwG2WgLDY2LxkajF'
  nombre:string
  codigo:string

  constructor(public http: Http) {
    console.log('Hello BackProvider Provider');
  }

}
