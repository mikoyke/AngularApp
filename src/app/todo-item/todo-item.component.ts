import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../services/todo.interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input('item') todo!: Todo;
  @Output() todoidRef = new EventEmitter();

  deleteTodo() {
    this.todoidRef.emit(this.todo.id);
  }
}
