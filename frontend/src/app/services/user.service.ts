import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User;
  users: User[];
  readonly URL_API = `${environment.apiUrl}/api/v1/users`;

  constructor(private http: HttpClient) {}

  getUserList(page: number = 1) {
    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.http.get<User[]>(this.URL_API, { params });
  }

  getUser(id: number) {
    return this.http.get<User>(this.URL_API + `/${id}`);
  }
}
