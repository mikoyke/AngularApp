import { Component } from '@angular/core';
import {
  Backdrop,
  Backdrops,
  MovieDetails,
  Cast,
  Credits,
  Videos,
} from '../../../core/services/interfaces';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../core/services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from '../trailer-dialog/trailer-dialog.component';

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
    private movieService: MovieService,
    private dialog: MatDialog
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
    this.movieService.getMovieVideos(movieId).subscribe((videos: Videos) => {
      const trailer = videos.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );
      if (trailer) {
        this.selectedVideoId = trailer.key;
      }
    });
  }
  // openTrailer() {
  //   this.dialog.open(TrailerDialogComponent, {
  //     data: { videoId: this.selectedVideoId },
  //     width: '800px',
  //     height: '600px',
  //   });
  // }

  getVideo() {
    this.isPlayerVisible = true;
  }
  closePlayer() {
    this.isPlayerVisible = false;
  }
}
