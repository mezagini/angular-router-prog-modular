import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/api/auth`;

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  login(email: string, password: string): Observable<Auth> {
    return this._http.post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap( response => this._tokenService.saveToken(response.access_token) )
      )
  }

  profile(): Observable<User> {
    return this._http.get<User>(`${this.apiUrl}/profile`)
  }
}
