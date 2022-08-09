import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(d: any): number {
    let date = new Date(d);
    let now : Date = new Date();
    let fullYears : number = now.getFullYear() - date.getFullYear();
    if (now.getMonth < date.getMonth && now.getDate < date.getDate){
      fullYears --;
    }
    return fullYears;
  }

}
