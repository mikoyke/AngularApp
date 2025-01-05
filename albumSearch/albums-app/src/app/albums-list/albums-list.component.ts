import { Component, Input } from '@angular/core';
import { Album } from '../service/interfaces';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.css',
})
export class AlbumsListComponent {
  @Input() album!: Album;
}
