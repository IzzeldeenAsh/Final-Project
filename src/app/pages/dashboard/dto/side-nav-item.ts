export class NavItemDTO {
  displayName: string;
  icon: string;
  route: string;
  isAdmin: boolean;
  children!: NavItemDTO[];

  constructor(
    displayName: string,
    icon: string,
    route: string,
    isAdmin: boolean,
    children?: NavItemDTO[]
  ) {
    this.displayName = displayName;
    this.icon = icon;
    this.route = route;
    this.isAdmin = isAdmin;
    this.children = children ? children : [];
  }
}
