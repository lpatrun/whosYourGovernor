import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyNum'
})
export class PrettyNumPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.replace(/([-/])/g, " ");
  }

}
