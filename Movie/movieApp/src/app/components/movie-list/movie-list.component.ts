import { Component } from '@angular/core';
import { skip, Subscriber, Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { moviePoster } from '../../services/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  moviesubp = new Subscription();
  movies!: moviePoster[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesubp = this.movieService.movieSubject$.subscribe(
      (val: moviePoster[]) => {
        this.movies = val;
        console.log(val);
      }
    );
  }
}
