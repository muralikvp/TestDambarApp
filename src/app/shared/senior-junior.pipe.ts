import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seniorJunior'
})
export class SeniorJuniorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value > 45){
      return "Senior";
    }
    else
    {
      return "Junior";
    }
  }

}
