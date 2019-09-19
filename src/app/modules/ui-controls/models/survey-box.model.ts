export enum SURVEY_BOX_TYPES {
  GLASS = 'GLASS',
  RESULTS = 'RESULTS',
}

export interface ISurveyBox {
  categoryDescription?: string;
  finalText?: string;
  imageUrl?: string;
  voteInfo?: IVoteModel;
  preTitle?: string;
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
