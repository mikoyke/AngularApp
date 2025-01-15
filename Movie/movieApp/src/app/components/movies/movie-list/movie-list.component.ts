import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { movie } from '../../../services/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  standalone: false,
})
export class MovieListComponent {
  moviesubp = new Subscription();
  movies!: movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesubp = this.movieService.movieSubject$.subscribe(
      (val: movie[]) => {
        this.movies = val;
      }
    );
  }
}
