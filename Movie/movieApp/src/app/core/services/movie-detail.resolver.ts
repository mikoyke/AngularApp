import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie.interface';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailResolver implements Resolve<MovieDetails> {
  constructor(private movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieDetails> {
    const movieId = route.paramMap.get('id')!;
    return this.movieService.getMovieDetails(+movieId);
  }
}
