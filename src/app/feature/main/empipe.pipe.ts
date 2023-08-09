import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empipe'
})
export class EmpipePipe implements PipeTransform {

  transform(value: string, args?: any): string {
   

    return value.concat('.in');
  }

}
