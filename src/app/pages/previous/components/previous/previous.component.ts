import { Component, OnInit, Input } from '@angular/core';
import { ISurveyBox, SURVEY_CATEGORY } from 'src/app/modules/ui-controls/models/survey-box.model';
import { TrialsService } from 'src/app/services/trials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { ROUTES } from 'src/app/models/routes.model';

@Component({
  selector: 'test-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {

  trialsList: ISurveyBox[];

  trialCategoryId: SURVEY_CATEGORY;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private router: Router,
    private trialsService: TrialsService,
    ) {
      this.headerService.setHeaderImage(undefined);
  }

  ngOnInit() {
    this.getRouteParams();
    this.router.events.subscribe(change => this.getRouteParams());
  }

  getRouteParams() {
    this.loadTrials(this.route.snapshot.params.category);
  }

  loadTrials(trialCategoryId) {
    this.headerService.setHeaderImage(undefined);
    this.trialCategoryId = trialCategoryId;
    if (this.trialCategoryId) {
      this.trialCategoryId = trialCategoryId;
      this.trialsService
        .getTrialsByCategory(this.trialCategoryId)
        .subscribe(trials => this.trialsList = trials);
    }
  }

  handleTrialRequirement(trial: ISurveyBox) {
    this.trialsService.loadTrial(trial);
  }

}
