import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: any, upper: boolean): string {
    return value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
  }

}
