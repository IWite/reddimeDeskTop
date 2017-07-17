import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';

/**
 * Generated class for the MipipePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'mipipe',
})
export class MipipePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any) {
    let con = value + ''
    con = con.replace(/\D/, '')
    return numeral(con).format(	'0,0')
  }
}
