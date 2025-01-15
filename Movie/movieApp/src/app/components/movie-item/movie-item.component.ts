import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { movie } from '../../services/interfaces';
import { Router } from '@angular/router';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrl: './movie-item.component.scss',
    standalone: false
})
export class MovieItemComponent {
  @Input() movie!: movie;
  constructor(private router: Router) {}
  navigateToDetails(movieId: number) {
    this.router.navigate(['/movie-details', movieId]);
  }
}
