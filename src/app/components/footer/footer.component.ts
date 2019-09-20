import { Component } from '@angular/core';
import { NavLinksService } from 'src/app/services/nav-links.service';
import { INavLink, INavElement } from 'src/app/models/nav-link.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'test-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  links: INavElement[];
  networks: INavElement[];

  constructor(private navLinksService: NavLinksService) {
    forkJoin(
      this.navLinksService.getFooterLinks(),
      this.navLinksService.getNetworksLinks(),
    ).subscribe(([footerLinks, networksLinks]) => {
      this.links = [...footerLinks];
      this.networks = [...networksLinks];
    });
  }
}
