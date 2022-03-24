import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUserDTO, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<User[]>(this.apiUrl);
  }

  create(dto: CreateUserDTO) {
    return this._http.post(this.apiUrl, dto);
  }

}
