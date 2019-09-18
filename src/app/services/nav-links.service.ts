import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INavLink } from '../models/nav-link.model';
import { ROUTES } from '../models/routes.model';

const navLinksMock: INavLink[] = [
  {
    label: 'Past Trials',
    route: ROUTES.previous
  },
  {
    label: 'How it works',
    route: undefined,
  },
  {
    label: 'Log In / Sign Up',
    route: ROUTES.account
  }
];

const footerLinksMock: INavLink[] = [
  {
    label: 'Terms and Conditions',
    route: undefined,
  },
  {
    label: 'Privacy Policy',
    route: undefined,
  },
  {
    label: 'Contact Us',
    route: undefined
  }
];

const networksLinksMock: INavLink[] = [
  {
    label: 'fab fa-facebook-square',
    route: 'https://www.facebook.com',
  },
  {
    label: 'fab fa-twitter',
    route: 'https://twitter.com'
  }
];

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {


  getNavBarLinks(): Observable<INavLink[]> {
    return of(navLinksMock);
  }

  getFooterLinks(): Observable<INavLink[]> {
    return of(footerLinksMock);
  }

  getNetworksLinks(): Observable<INavLink[]> {
    return of(networksLinksMock);
  }
}
