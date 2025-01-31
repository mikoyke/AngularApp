import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../core/services/movie.service';
import { Movie } from '../../../core/interfaces/movie.interface';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  standalone: false,
})
export class MovieListComponent {
  movies!: Movie[];
  page: number = 2;

  constructor(
    private movieService: MovieService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.movieService.movieSubject$.subscribe((val: Movie[]) => {
      this.movies = val;
    });
    this.movieService.getMovies(this.page).subscribe();
    setTimeout(() => {
      window.scrollTo(0, this.scrollService.getScrollPosition());
    }, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollService.saveScrollPosition(window.scrollY);
  }

  onScrollDown() {
    this.page++;
    this.movieService.getMovies(this.page).subscribe();
  }
}
