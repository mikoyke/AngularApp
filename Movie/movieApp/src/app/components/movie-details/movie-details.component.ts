import { Component } from '@angular/core';
import {
  Backdrop,
  Backdrops,
  MovieDetails,
  Cast,
  Credits,
} from '../../services/interfaces';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie!: MovieDetails;
  backdrop_img = '';
  backdrops!: Backdrop[];
  casts!: Cast[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const movieId = this.route.snapshot.params['id'];

    this.movieService
      .getMovieDetails(movieId)
      .subscribe((movieDetails: MovieDetails) => {
        this.movie = movieDetails;
        this.backdrop_img = this.movie.backdrop_path;
      });
    this.movieService.getMovieBackdrops(movieId).subscribe((res: Backdrops) => {
      this.backdrops = res.backdrops;
    });

    this.movieService.getMovieCredis(movieId).subscribe((res: Credits) => {
      this.casts = res.cast;
    });
  }
}
