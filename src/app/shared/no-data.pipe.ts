import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  transform(value: any): any {
    if (value === 0 || value === "") {
      return ('-');
    }
    else return value;
  }

}
