import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discriptionManage'
})
export class DiscriptionManagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
