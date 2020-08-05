import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "alphabeticalOrder"
})
export class AlphabeticalOrderPipe implements PipeTransform {
  transform(value: any): any {
    if (value != null) {
      return value.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
    } else {
      return;
    }
  }
}
