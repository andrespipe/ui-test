import { ROUTES } from './routes.model';

export interface INavElement {
  label: string;
}
export interface INavLink extends INavElement {
  route: ROUTES | string;
  params: string;
}

export interface INavMenu extends INavElement {
  links: INavElement[];
}

