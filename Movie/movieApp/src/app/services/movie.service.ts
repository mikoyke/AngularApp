import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { moiveRes, movie, MovieDetails } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '54fd29de665b2f87909a53797eb2a33c';
  private baseUrl = 'https://api.themoviedb.org/3';

  private movieListSubject$ = new BehaviorSubject<movie[]>([]);
  movieSubject$ = this.movieListSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.getMovies().subscribe();
  }
  getMovies() {
    return this.http
      .get<moiveRes>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`)
      .pipe(
        tap((val: moiveRes) => {
          this.movieListSubject$.next(val.results);
        })
      );
  }
  getMovieDetails(movieId: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`
    );
  }
}
