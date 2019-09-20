import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INavLink, INavElement, INavMenu } from '../models/nav-link.model';
import { ROUTES } from '../models/routes.model';
import { SURVEY_CATEGORY } from '../modules/ui-controls/models/survey-box.model';

const navLinksMock: INavElement[] = [
  {
    label: 'Past Trials',
    route: ROUTES.previous,
    links: Object.getOwnPropertyNames(SURVEY_CATEGORY).map(category => {
      return {
        label: SURVEY_CATEGORY[category],
        route: ROUTES.previous,
        params: category
      } as INavLink;
    }),
  } as INavMenu,
  {
    label: 'How it works',
    route: ROUTES.how,
  } as INavLink,
  {
    label: 'Log In / Sign Up',
    route: ROUTES.account
  } as INavLink
];

const footerLinksMock: INavElement[] = [
  {
    label: 'Terms and Conditions',
    route: undefined,
  } as INavLink,
  {
    label: 'Privacy Policy',
    route: undefined,
  } as INavLink,
  {
    label: 'Contact Us',
    route: undefined
  } as INavLink
];

const networksLinksMock: INavElement[] = [
  {
    label: 'fab fa-facebook-square',
    route: 'https://www.facebook.com',
  } as INavLink,
  {
    label: 'fab fa-twitter',
    route: 'https://twitter.com'
  } as INavLink
];

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {


  getNavBarLinks(): Observable<INavElement[]> {
    return of(navLinksMock);
  }

  getFooterLinks(): Observable<INavElement[]> {
    return of(footerLinksMock);
  }

  getNetworksLinks(): Observable<INavElement[]> {
    return of(networksLinksMock);
  }
}
