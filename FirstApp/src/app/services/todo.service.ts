import { Injectable } from "@angular/core";
import { Todo } from "./todo.interfaces";
import { BehaviorSubject, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TodoService {
  // todo$ = new BehaviorSubject(this.todos);
  // value$ => Observer
  url = "https://jsonplaceholder.typicode.com/todos";
  subject$ = new Subject(); //default public
  //private http = inject(HttpClient)
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
