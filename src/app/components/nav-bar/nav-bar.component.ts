import { Component, OnInit } from '@angular/core';
import { INavLink, INavElement } from 'src/app/models/nav-link.model';
import { NavLinksService } from 'src/app/services/nav-links.service';

@Component({
  selector: 'test-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  buttons: INavElement[];

  constructor(private navLinksService: NavLinksService) {
    this.navLinksService.getNavBarLinks().subscribe(links => this.handleLinks(links));
  }

  private handleLinks(links: INavElement[]) {
    this.buttons = links;
  }

}
