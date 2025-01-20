import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../core/services/movie.service';
import { Movie } from '../../../core/interfaces/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  standalone: false,
})
export class MovieListComponent {
  moviesubp = new Subscription();
  movies!: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesubp = this.movieService.movieSubject$.subscribe(
      (val: Movie[]) => {
        this.movies = val;
      }
    );
  }
}
