import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-store';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private _userService: UsersService, private _authService: AuthService) {

  }

  createUser() {
    this._userService.create({
      name: 'Daniel',
      email: '',
      password: ''
    })
      .subscribe({
        next: () => {

        },
        error: () => {

        }
      });
  }

  login() {
    this._authService.login( 'asd', 'as')
      .subscribe({
        next: (res) => {
          
        },
        error: () => {

        }
      });
  }

  getProfile() {
    this._authService.profile()
      .subscribe({
        next: () => {

        },
        error: () => {

        }
      })
  }
}
