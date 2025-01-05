import { Injectable } from "@angular/core";
import { Todo } from "./todo.interfaces";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TodoService {
  todos!: Todo[];
  url = "https://jsonplaceholder.typicode.com/todos";
  todo$ = new BehaviorSubject(this.todos);
  // value$ => Observer

  constructor(private http: HttpClient) {}
  gettodo() {
    return this.http.get<Todo[]>(this.url);
  }

  //   gettodo() {
  //     return this.http.get<any>(`${this.baseUrl}/${this.userPath}`).pipe(
  //       map((users: any[]) => {
  //         return users.map((user) => ({ email: user.email }));
  //       })
  //     );
  //   }
  // }
}
