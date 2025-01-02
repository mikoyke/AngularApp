import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../change-list/change-list.component';

@Component({
  selector: 'app-change-list-card',
  templateUrl: './change-list-card.component.html',
  styleUrl: './change-list-card.component.css',
})
export class ChangeListCardComponent {
  @Input() card!: Card;
  @Output() item = new EventEmitter();

  handleClick() {
    this.item.emit(this.item);
  }
}
