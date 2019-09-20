import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ISurveyBox, SURVEY_CATEGORY, TRIALS_LIST_MOCK, TRIAL_DETAIL_MOCK, ITrialDetail } from '../modules/ui-controls/models/survey-box.model';
import { Router } from '@angular/router';
import { ROUTES } from '../models/routes.model';

@Injectable({
  providedIn: 'root'
})
export class TrialsService {

  allTrials = new BehaviorSubject<ISurveyBox[]>([
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
    ...TRIALS_LIST_MOCK,
  ]);

  filteredTrials = new BehaviorSubject<ISurveyBox[]>([]);

  constructor(private router: Router) {
  }

  getTrialsByCategory(category: SURVEY_CATEGORY): Observable<ISurveyBox[]> {
    return new Observable(observer => {
      this.allTrials.subscribe(trials => {
        const filtered = trials.filter(trial => trial.categoryID === category);
        this.filteredTrials.next(filtered);
        observer.next(filtered);
      });
    });
  }

  getTrialById(trialId: number): Observable<ITrialDetail> {
    const finded = TRIALS_LIST_MOCK.find(trial => trial.surveyID === trialId);
    const trialDetail = {...TRIAL_DETAIL_MOCK};
    trialDetail.title = finded.title;
    trialDetail.headerImage = finded.imageUrl;
    trialDetail.voteInfo = finded.voteInfo;
    trialDetail.percentDetails = trialDetail.percentDetails.map(detail => {detail.voteInfo = finded.voteInfo; return detail; });
    return of(trialDetail);
  }

  loadTrial(trial: ISurveyBox) {
    this.router.navigateByUrl(`/${ROUTES.previous}/${trial.categoryID}/${trial.surveyID}/${trial.title.replace(/\s/g, '')}`);
  }
}
