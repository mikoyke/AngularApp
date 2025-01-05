import { Component } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { Todo } from "../services/todo.interfaces";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  //interplation
  // public name:string = 'Angular'
  //--------------------------------------------------

  // one way to inject data from service, it'll create duplicate instances for every component:
  // todos = new TodoService().todos;

  todos!: Todo[];
  title = "";
  search = "";
  // searchedArr!: Todo[]; //can use pipe instead of arr
  constructor(private todoService: TodoService) {
    //dependency injection: it only create one instance, so the data from only one source:
    // this.todos = this.todoService.todos;

    //to subcribe: it'll synchronize all changes:
    // this.todoService.todo$.subscribe((todos) => {
    //   this.todos = todos;
    // });
    this.todoService.gettodo().subscribe((todos) => {
      this.todos = todos;

      // this.searchedArr = [...this.todos]; //only a copy, so when searchedArr has changed, this.todos won't change.
    });
  }

  handleClick(id: number) {
    console.log(id);
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele) => ele.id !== id);
  }
}
