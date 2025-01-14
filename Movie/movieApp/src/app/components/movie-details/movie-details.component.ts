import { Component } from '@angular/core';
import { MovieDetails } from '../../services/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie!: MovieDetails;
  genresList!: string;

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
        this.genresList = this.getGenresList(this.movie.genres);
      });
  }

  getGenresList(genres: { name: string }[] | null | undefined): string {
    return genres?.map((g) => g.name).join(', ') || 'N/A';
  }
}
