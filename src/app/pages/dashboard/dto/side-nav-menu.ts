import { NavItemDTO } from './side-nav-item';

export class NavMenuDTO {
  displayName: string;
  children: NavItemDTO[];
  constructor(displayName: string, children: NavItemDTO[]) {
    this.displayName = displayName;
    this.children = children;
  }
}
