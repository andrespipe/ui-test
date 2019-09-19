import { ISurveyBox } from 'src/app/modules/ui-controls/models/survey-box.model';

export interface IHomePage {
  header: ISurveyBox;
  headerImage: string;
  previousTrials: ISurveyBox[];
}
