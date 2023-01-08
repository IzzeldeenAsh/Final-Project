import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanLoad {
  constructor(private _authService: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const isLoggedIn = this._authService.IsLogged;
    if (!isLoggedIn) {
      return true;
    }
    return false;
  }
}
