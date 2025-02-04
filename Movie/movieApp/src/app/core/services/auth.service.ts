import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthDto } from '../interfaces/user-auth.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authServerPath = 'http://localhost:5566/api/v1/auth';
  private registrationData: any = {};
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string | null>(null);
  private userRole = new BehaviorSubject<string | null>(null);

  isLoggedIn = this.loggedIn.asObservable();
  currentUser = this.userName.asObservable();
  currentRole = this.userRole.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setRegistrationData(step: string, data: any): void {
    this.registrationData = { ...this.registrationData, [step]: data };
  }

  getRegistrationData(): Object {
    return this.registrationData;
  }

  clearRegistrationData(): void {
    this.registrationData = {};
  }

  submitRegistration(): Observable<AuthDto> {
    const formattedData = {
      password: this.registrationData.step1.password,
      email: this.registrationData.step1.email,
      username: this.registrationData.step2.username,
      tmdb_key: this.registrationData.step2.Api_Key,
      role: this.registrationData.step3.role,
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
            this.userRole.next(res.role);
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

  updateRole(newRole: string): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return throwError('User is not authenticated');
    }
    console.log('accessToken:', accessToken);
    return this.http
      .patch(
        `${this.authServerPath}/userupdate`,
        { role: newRole },
        {
          headers: { Authorization: accessToken },
        }
      )
      .pipe(
        tap(() => {
          this.userRole.next(newRole);
          console.log('Role updated successfully');
          this.router.navigate(['/movie-list']);
        }),
        catchError((error) => {
          console.error('Role update failed:', error);
          return throwError('Role update failed!');
        })
      );
  }
  initiallizeAuthStatus(): Promise<void> {
    return new Promise(() => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        console.log(accessToken);
        this.handleAuthentication(accessToken);
        this.loggedIn.next(true);
      }
    });
  }
}
