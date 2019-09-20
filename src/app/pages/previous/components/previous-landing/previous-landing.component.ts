import { Component, OnInit } from '@angular/core';
import { SURVEY_CATEGORY } from 'src/app/modules/ui-controls/models/survey-box.model';
import { INavLink } from 'src/app/models/nav-link.model';
import { ROUTES } from 'src/app/models/routes.model';

@Component({
  selector: 'test-previous-landing',
  templateUrl: './previous-landing.component.html',
  styleUrls: ['./previous-landing.component.scss']
})
export class PreviousLandingComponent implements OnInit {

  options: INavLink[] = Object.getOwnPropertyNames(SURVEY_CATEGORY).map(category => {
    return {
      label: SURVEY_CATEGORY[category],
      route: ROUTES.previous,
      params: category
    } as INavLink;
  });

  constructor() { }

  ngOnInit() {
  }

}
