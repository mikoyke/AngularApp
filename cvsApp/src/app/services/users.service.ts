import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Users>(this.baseUrl);
  }
}
