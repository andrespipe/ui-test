import { Component, OnInit } from '@angular/core';
import { TrialsService } from 'src/app/services/trials.service';
import { HeaderService } from 'src/app/services/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITrialDetail, ISurveyBox } from 'src/app/modules/ui-controls/models/survey-box.model';
import * as moment from 'moment';
import { take } from 'rxjs/operators';

@Component({
  selector: 'test-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss']
})
export class SurveyDetailComponent implements OnInit {

  trial: ITrialDetail;

  trials: ISurveyBox[];

  formatedStartDate: string;
  formatedEndDate: string;

  dateFormat = 'MMMM DD [of] YYYY';

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private router: Router,
    private trialsService: TrialsService
    ) { }

  ngOnInit() {
    this.setHeaderImage();
    this.getRouteParams();
    this.router.events.subscribe(() => this.getRouteParams());
  }

  getRouteParams() {
    this.loadTrial(parseInt(this.route.snapshot.params.surveyId, undefined));
    this.trialsService
      .allTrials
      .subscribe(trials => this.trials = trials.slice(0, 3));
  }

  loadTrial(id: number) {
    this.trialsService
      .getTrialById(id)
      .subscribe(trial => this.setTrial(trial));
  }

  setTrial(trial: ITrialDetail) {
    this.trial = trial;
    this.formatedStartDate = moment(this.trial.startDate).format(this.dateFormat);
    this.formatedEndDate = moment(this.trial.endDate).format(this.dateFormat);
    this.setHeaderImage(this.trial);
  }

  setHeaderImage(trial?: ITrialDetail) {
    this.headerService.setHeaderImage( trial ? trial.headerImage : undefined);
  }

  handleRequireInformation(trial: ISurveyBox) {
    this.trialsService.loadTrial(trial);
  }

}
