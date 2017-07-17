import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';
/**
 * Generated class for the NumberPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    // let numero = value.replace(/\D/, '')
    return value.toLowerCase();
  }
}
