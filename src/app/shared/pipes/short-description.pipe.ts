import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    value = value.substr(0, value.length >= 150 ? 150 : value.length);
    value = value + "...";
    return value;
  }

}
