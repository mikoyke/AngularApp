import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authServerPath = 'http://localhost:5566/api/v1';

  constructor(private http: HttpClient, private router: Router) {}

  login(appUser: {
    email: string;
    password: string;
  }): Observable<{ accessToken: string; role: string }> {
    return this.http
      .post<{ accessToken: string; role: string }>(
        `${this.authServerPath}/auth/signin`,
        appUser
      )
      .pipe(
        tap(({ accessToken, role }) => {
          this.setUserValueByToken({ accessToken, role });
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something went wrong during sign in!', error);
        })
      );
  }

  signup(userInfo: {
    username: string;
    password: string;
    email: string;
    role: string;
    tmdb_key: string;
  }): Observable<{ accessToken: string; role: string }> {
    return this.http
      .post<{ accessToken: string; role: string }>(
        `${this.authServerPath}/auth/signup`,
        userInfo
      )
      .pipe(
        tap(({ accessToken, role }) => {
          this.setUserValueByToken({ accessToken, role });
          this.router.navigate(['/movies']);
        }),
        catchError((error) => {
          return throwError('Something went wrong during sign up!', error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/home']);
  }

  private setUserValueByToken(tokenData: {
    accessToken: string;
    role: string;
  }): void {
    // Logic to set user details from token data
    localStorage.setItem('access_token', tokenData.accessToken);
    // Set other user details if necessary
  }
}
