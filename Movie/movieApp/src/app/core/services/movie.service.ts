import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import {
  Backdrop,
  Backdrops,
  Credits,
  MoiveRes,
  Movie,
  MovieDetails,
  Videos,
} from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '54fd29de665b2f87909a53797eb2a33c';
  private baseUrl = 'https://api.themoviedb.org/3';

  private movieListSubject$ = new BehaviorSubject<Movie[]>([]);
  movieSubject$ = this.movieListSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.getMovies().subscribe();
  }
  getMovies() {
    return this.http
      .get<MoiveRes>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`)
      .pipe(
        tap((val: MoiveRes) => {
          this.movieListSubject$.next(val.results);
        })
      );
  }
  getMovieDetails(movieId: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`
    );
  }

  getMovieBackdrops(movieId: number): Observable<Backdrops> {
    return this.http.get<Backdrops>(
      `${this.baseUrl}/movie/${movieId}/images?api_key=${this.apiKey}`
    );
  }
  getMovieCredis(movieId: number): Observable<Credits> {
    return this.http.get<Credits>(
      `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(movieId: number): Observable<Videos> {
    return this.http.get<Videos>(
      `${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`
    );
  }
}
