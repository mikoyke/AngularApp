import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { TodoService } from "./services/todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "my-app";
  // subject$ = new Subject();

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    // this.subject$.next(2);
    //Called after the constructor,initializing input properties, and the first call to ngOnChanges.
    //Add 'implemengts OnInit' to the class.
    // this.subject$.subscribe((val) => {
    //   console.log("sub1 ", val);
    // });
    // this.subject$.next(1);
    // this.subject$.next(2);
    // this.subject$.subscribe((val) => {
    //   console.log("sub2 ", val);
    // });
    // this.subject$.next(3);
    // this.subject$.next(4);
    // this.subject$.complete;
  }
  counter = 0;
  emitData() {
    this.todoService.subject$.next(this.counter++);
  }
}
