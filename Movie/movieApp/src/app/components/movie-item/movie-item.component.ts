import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { moviePoster } from '../../services/interfaces';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
})
export class MovieItemComponent {
  @Input() movie!: moviePoster;
  constructor(private movieServic: MovieService) {}
}
