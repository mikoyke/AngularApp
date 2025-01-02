import { Injectable } from '@angular/core';
import { Todo } from './todo.interfaces';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];
  url = 'https://jsonplaceholder.typicode.com/todos';
  todo$ = new BehaviorSubject(this.todos);

  constructor(private http: HttpClient) {}
  gettodo() {
    return this.http.get<Todo[]>(this.url);
  }
}
