export enum SURVEY_BOX_TYPES {
  GLASS = 'GLASS',
  RESULTS = 'RESULTS',
}

export enum SURVEY_CATEGORY {
  POLITICS = 'POLITICS',
  BUSINESS = 'BUSINESS',
  SPORTS = 'SPORTS',
  CULTURE = 'CULTURE',
  ENTERTAINMENT = 'ENTERTAINMENT',
}

export interface ISurveyBox {
  categoryID: SURVEY_CATEGORY;
  categoryDescription?: string;
  finalText?: string;
  imageUrl?: string;
  voteInfo?: IVoteModel;
  preTitle?: string;
  surveyID;
  text?: string;
  timeText?: string;
  title?: string;
  type: SURVEY_BOX_TYPES;
}

export interface IVoteModel {
  dislike: number;
  isFavorable: boolean;
  like: number;
}

export interface IComment {
  title: string;
  text: string;
  reporterName: string;
  isFavorable: boolean;
}

export interface IPercentBox {
  isFavorable: boolean;
  title: string;
  text: string;
  voteInfo: IVoteModel;
}

export interface ITrialDetail {
  conclusionText: string;
  surveyID;
  title: string;
  startDate: Date;
  endDate: Date;
  summaryText: string;
  headerImage: string;
  voteInfo: IVoteModel;
  comments: IComment[];
  percentDetails: IPercentBox[];
}

// MOCKS

export const TRIALS_LIST_MOCK: ISurveyBox[] = [
  {
    surveyID: 2,
    categoryID: SURVEY_CATEGORY.ENTERTAINMENT,
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
    surveyID: 3,
    categoryID: SURVEY_CATEGORY.BUSINESS,
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
    surveyID: 4,
    categoryID: SURVEY_CATEGORY.POLITICS,
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
    surveyID: 5,
    categoryID: SURVEY_CATEGORY.ENTERTAINMENT,
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
];

const voteInfo: IVoteModel = {
  dislike: 12,
  isFavorable: true,
  like: 88,
};


export const TRIAL_DETAIL_MOCK: ITrialDetail = {
  conclusionText: `Hillary is rockin’
                  the thumb!
                  Gotta love it!`,
  headerImage: '/assets/img/hilary-min.png',
  title: 'Hillary Clinton',
  comments: [
    {
      isFavorable: true,
      reporterName: 'Jack',
      text: `Curabitur et fermentum nunc.
      Aliquam quis turpis neque. Fusce et tincidunt ante.
      Nulla sem tortor, pulvinar in sodales vitae, sollicitudin at enim.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Pellentesque volutpat egestas ante. `,
      title: 'Top Comment',
    },
    {
      isFavorable: false,
      reporterName: 'Jack',
      text: `Curabitur et fermentum nunc.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Vivamus vel nisi lorem. Fusce posuere turpis ac leo tempus, et feugiat nunc eleifend.
      Pellentesque volutpat egestas ante. `,
      title: 'Top Comment',
    },
    {
      isFavorable: undefined,
      reporterName: 'Jack',
      text: `Curabitur et fermentum nunc.
      Aliquam quis turpis neque. Fusce et tincidunt ante.
      Nulla sem tortor, pulvinar in sodales vitae, sollicitudin at enim.
      Pellentesque volutpat egestas ante. `,
      title: 'Top Comment',
    }
  ],
  endDate: new Date(),
  percentDetails: [
    {
      isFavorable: true,
      text: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex?`,
      title: `Non-Catholic`,
      voteInfo,
    },
    {
      isFavorable: false,
      text: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex?`,
      title: `Very Conservative`,
      voteInfo,
    },
  ],
  startDate: new Date(),
  summaryText: `Integer non fringilla ligula, quis aliquet ligula.
  <b>Donec ligula velit</b>, auctor vitae mattis sed, dictum vitae erat.
  Sed at elit a lacus luctus laoreet in sed augue. In ornare iaculis orci id volutpat.
  Vivamus ac leo ut lacus <b>varius rutrum</b>. `,
  surveyID: 6,
  voteInfo,
};
