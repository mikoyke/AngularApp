import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contextPipe",
})
export class ContextPipePipe implements PipeTransform {
  transform(context: string, length: string): string {
    return context.length > +length
      ? context.substring(0, +length) + "..."
      : context;
  }
}
