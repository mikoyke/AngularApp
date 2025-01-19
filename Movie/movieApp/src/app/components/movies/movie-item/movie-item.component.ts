import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { Movie } from '../../../core/services/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
  standalone: false,
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  constructor(private router: Router) {}
  navigateToDetails(movieId: number) {
    this.router.navigate(['movie-list/details', movieId]);
  }
}
