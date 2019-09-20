import { Component, OnInit } from '@angular/core';
import { SURVEY_CATEGORY, ISurveyBox } from 'src/app/modules/ui-controls/models/survey-box.model';
import { INavLink } from 'src/app/models/nav-link.model';
import { ROUTES } from 'src/app/models/routes.model';
import { TrialsService } from 'src/app/services/trials.service';

@Component({
  selector: 'test-previous-landing',
  templateUrl: './previous-landing.component.html',
  styleUrls: ['./previous-landing.component.scss']
})
export class PreviousLandingComponent implements OnInit {

  trials: ISurveyBox[];

  options: INavLink[] = Object.getOwnPropertyNames(SURVEY_CATEGORY).map(category => {
    return {
      label: SURVEY_CATEGORY[category],
      route: ROUTES.previous,
      params: category
    } as INavLink;
  });

  constructor(private trialsService: TrialsService) { }

  ngOnInit() {
    this.trialsService
      .allTrials
      .subscribe(trials => this.trials = trials);
  }

  handleRequireInformation(trial: ISurveyBox) {
    this.trialsService.loadTrial(trial);
  }

}
