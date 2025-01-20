import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  AuthDto,
  AppUser,
  UserInfo,
  AppUserAuth,
  UserRole,
} from '../interfaces/user-auth.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authServerPath = 'http://localhost:5566/api/v1/auth';
  private registrationData: any = {};
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string | null>(null);

  isLoggedIn = this.loggedIn.asObservable();
  currentUser = this.userName.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setRegistrationData(step: string, data: any): void {
    this.registrationData = { ...this.registrationData, [step]: data };
  }

  getRegistrationData(): any {
    return this.registrationData;
  }

  clearRegistrationData(): void {
    this.registrationData = {};
  }

  submitRegistration(): Observable<AuthDto> {
    const formattedData = {
      username: this.registrationData.step2.username,
      password: this.registrationData.step1.password,
      email: this.registrationData.step1.email,
      tmdb_key: this.registrationData.step2.Api_Key,
    };
    console.log('format data:', formattedData);
    return this.http
      .post<AuthDto>(this.authServerPath + '/signup', formattedData)
      .pipe(
        tap((response) => {
          console.log('Registration successful:', response);
          this.clearRegistrationData();
        }),
        catchError((error) => {
          console.error('Registration failed:', error);
          return throwError('Registration failed!');
        })
      );
  }
  signIn(credentials: { email: string; password: string }) {
    return this.http
      .post<AuthDto>(`${this.authServerPath}/signin`, credentials)
      .pipe(
        tap((res: AuthDto) => {
          if (res.accessToken) {
            this.handleAuthentication(res.accessToken);
          }
        })
      );
  }

  private handleAuthentication(accessToken: string) {
    const decodedToken: any = jwtDecode(accessToken);
    const username = decodedToken?.username;
    this.loggedIn.next(true);
    this.userName.next(username);
    localStorage.setItem('accessToken', accessToken);
  }

  logout() {
    this.loggedIn.next(false);
    this.userName.next(null);
    localStorage.removeItem('accessToken');
  }

  checkLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
