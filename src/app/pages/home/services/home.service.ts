import { Injectable } from '@angular/core';
import { IHomePage } from '../models/home-page.model';
import { SURVEY_BOX_TYPES, SURVEY_CATEGORY, TRIALS_LIST_MOCK } from 'src/app/modules/ui-controls/models/survey-box.model';
import { BehaviorSubject } from 'rxjs';

const homeInfoMock: IHomePage = {
  header: {
    surveyID: 1,
    categoryID: SURVEY_CATEGORY.CULTURE,
    preTitle: `What's your opinion on`,
    title: 'Pope Francis?',
    text: `He’s talking tough on clergy sexual abuse,
          but is he just another papal pervert protector? (thumbs down) or a
          true pedophile punishing pontiff? (thumbs up) `,
    type: SURVEY_BOX_TYPES.GLASS,
    finalText: 'What\'s Your Verdict?',
  },
  headerImage: '/assets/img/pope-min.png',
  previousTrials: TRIALS_LIST_MOCK,
};

@Injectable()
export class HomeService {

  homePage = new BehaviorSubject<IHomePage>(homeInfoMock);

}
