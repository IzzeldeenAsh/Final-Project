import { Injectable } from '@angular/core';
import { NavItemDTO } from '../pages/dashboard/dto/side-nav-item';
import { NavMenuDTO } from '../pages/dashboard/dto/side-nav-menu';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  constructor() {}

  getNavMenu() {
    return new NavMenuDTO('Dashboard Menu', [
      new NavItemDTO(
        'Dashboard',
        'dashboard',
        '/dashboard/dashboard-overview',
        true
      ),
      new NavItemDTO('Sectors', 'dashboard', '/dashboard/sectors-manage', true),
      new NavItemDTO(
        'Startups',
        'dashboard',
        '/dashboard/startups-manage',
        true
      ),
      new NavItemDTO('Home', 'dashboard', '/home', true),
    ]);
  }
}
