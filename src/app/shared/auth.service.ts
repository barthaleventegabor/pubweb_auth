import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router= inject(Router);

  host = 'http://localhost:8000/api/';

  private _isAuthenticated = signal(!!localStorage.getItem('token'));
  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  login(user: any) {
    const url = this.host + 'login';
    return this.http.post(url, user);
  }

  loginSuccess() {
    this._isAuthenticated.set(true);
  }
  logout() {
    this._isAuthenticated.set(false);
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
