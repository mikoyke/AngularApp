import { Component } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-subject-test",
  templateUrl: "./subject-test.component.html",
  styleUrl: "./subject-test.component.css",
})
export class SubjectTestComponent {
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.subject$.subscribe((val) => {
      console.log("transferComponent: ", val);
    });
  }
}
