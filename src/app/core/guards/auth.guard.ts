import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { UsersDataService } from 'src/app/initializer/users-data.service';
import { ModalService } from 'src/app/services/modal.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  isLogged!: boolean;
  constructor(
    private _userData: UsersDataService,
    private router: Router,
    private _modal: ModalService
  ) {}
  canLoad(): boolean {
    this._userData.isAuthenticated$.subscribe(
      (isLogged) => (this.isLogged = isLogged)
    );
    if (this.isLogged) {
      return true;
    } else {
      this._modal.toggleModal('RegisterForm');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
