import { Component } from '@angular/core';
import {
  Backdrop,
  Backdrops,
  MovieDetails,
  Cast,
  Credits,
  Videos,
} from '../../../core/interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../core/services/movie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  standalone: false,
})
export class MovieDetailsComponent {
  movie!: MovieDetails;
  backdrop_img = '';
  backdrops!: Backdrop[];
  casts!: Cast[];
  selectedVideoId: string = '';
  isPlayerVisible = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movie = this.route.snapshot.data['movie'];

    const movieId = this.route.snapshot.params['id'];

    this.backdrop_img = this.movie.backdrop_path;
    this.movieService.getMovieBackdrops(movieId).subscribe((res: Backdrops) => {
      this.backdrops = res.backdrops;
    });

    this.movieService.getMovieCredis(movieId).subscribe((res: Credits) => {
      this.casts = res.cast;
    });
    this.movieService.getMovieVideos(movieId).subscribe((videos: Videos) => {
      const trailer = videos.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );
      if (trailer) {
        this.selectedVideoId = trailer.key;
      }
    });
  }

  getVideo() {
    this.isPlayerVisible = true;
  }
  closePlayer() {
    this.isPlayerVisible = false;
  }
}
