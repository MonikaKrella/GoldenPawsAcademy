export interface SidebarData {
  title: string;
  path: string;
}

export interface NavbarData {
  title: string;
  index: number;
}

export interface LayoutModule {
  navbarTitle: string;
  sidebarData: SidebarData[];
}
