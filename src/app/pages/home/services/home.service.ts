import { Injectable } from '@angular/core';
import { IHomePage } from '../models/home-page.model';
import { SURVEY_BOX_TYPES } from 'src/app/modules/ui-controls/models/survey-box.model';
import { BehaviorSubject } from 'rxjs';

const homeInfoMock: IHomePage = {
  header: {
    preTitle: `What's your opinion on`,
    title: 'Pope Francis?',
    text: `He’s talking tough on clergy sexual abuse,
          but is he just another papal pervert protector? (thumbs down) or a
          true pedophile punishing pontiff? (thumbs up) `,
    type: SURVEY_BOX_TYPES.GLASS,
    finalText: 'What\'s Your Verdict?',
  },
  headerImage: '/assets/img/pope-min.png',
  previousTrials: [
    {
      categoryDescription: 'Entertainment',
      imageUrl: '/assets/img/kanye-min.png',
      title: 'Kanye West',
      text: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeText: '1 month ago',
      type: SURVEY_BOX_TYPES.RESULTS,
      voteInfo: {
        dislike: 36,
        isFavorable: true,
        like: 64,
      }
    },
    {
      categoryDescription: 'Business',
      imageUrl: '/assets/img/mark-min.png',
      title: 'Mark Zuckerberg',
      text: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeText: '1 month ago',
      type: SURVEY_BOX_TYPES.RESULTS,
      voteInfo: {
        dislike: 64,
        isFavorable: false,
        like: 36,
      }
    },
    {
      categoryDescription: 'Politics',
      imageUrl: '/assets/img/kristina-min.png',
      title: 'Cristina Fernández de Kirchner',
      text: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeText: '1 month ago',
      type: SURVEY_BOX_TYPES.RESULTS,
      voteInfo: {
        dislike: 64,
        isFavorable: false,
        like: 36,
      }
    },
    {
      categoryDescription: 'Entertainment',
      imageUrl: '/assets/img/malala-min.png',
      title: 'Malala Yousafzai',
      text: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeText: '1 month ago',
      type: SURVEY_BOX_TYPES.RESULTS,
      voteInfo: {
        dislike: 36,
        isFavorable: true,
        like: 64,
      }
    },
  ],
};

@Injectable()
export class HomeService {

  homePage = new BehaviorSubject<IHomePage>(homeInfoMock);

}
