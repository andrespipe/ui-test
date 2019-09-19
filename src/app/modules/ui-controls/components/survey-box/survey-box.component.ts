import { Component, Input, Output } from '@angular/core';
import { SURVEY_BOX_TYPES, ISurveyBox } from '../../models/survey-box.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'test-survey-box',
  templateUrl: './survey-box.component.html',
  styleUrls: ['./survey-box.component.scss']
})
export class SurveyBoxComponent {

  @Input() model: ISurveyBox = { type: SURVEY_BOX_TYPES.GLASS };

  @Output() requireInformation = new BehaviorSubject<ISurveyBox>(this.model);

  requireMoreInformation() {
    this.requireInformation.next(this.model);
  }

  formatImageUrl(url: string) {
    return `url('${url}')`;
  }

}
