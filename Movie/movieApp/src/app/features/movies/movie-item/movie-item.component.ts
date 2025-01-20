import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { Movie } from '../../../core/interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
  standalone: false,
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  loading = false;
  constructor(private router: Router) {}
  async navigateToDetails(movieId: number) {
    this.loading = true;
    try {
      await this.router.navigate(['movie-list/details', movieId]);
    } finally {
      this.loading = false;
    }
  }
}
