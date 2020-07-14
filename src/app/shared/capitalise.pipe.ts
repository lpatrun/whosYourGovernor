import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value = value.toLowerCase().replace(/([-/])/g, " ").split(" ");
    for (let i = 0; i < value.length; i++) {
      value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1)
    }
    return value.join(" ");
  }

}
