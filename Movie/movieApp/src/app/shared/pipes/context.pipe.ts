import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'context',
    standalone: false
})
export class ContextPipe implements PipeTransform {
  transform(overview: string, length: string): string {
    return overview.length > +length
      ? overview.substring(0, +length) + '...'
      : overview;
  }
}
