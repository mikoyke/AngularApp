import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { moiveRes, movieEntity, moviePoster } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private Url =
    'https://api.themoviedb.org/3/movie/popular?api_key=54fd29de665b2f87909a53797eb2a33c';

  private movieListSubject$ = new BehaviorSubject<moviePoster[]>([]);
  movieSubject$ = this.movieListSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.getMovies().subscribe();
  }
  getMovies() {
    return this.http.get<moiveRes>(this.Url).pipe(
      map((res: moiveRes) => {
        return res.results.map((movie: movieEntity) => {
          return {
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            overview: movie.overview,
          } as moviePoster;
        });
      }),
      tap((val: moviePoster[]) => {
        this.movieListSubject$.next(val);
      })
    );
  }
}
