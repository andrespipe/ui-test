import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISurveyBox } from '../../models/survey-box.model';

@Component({
  selector: 'test-survey-box',
  templateUrl: './survey-box.component.html',
  styleUrls: ['./survey-box.component.scss']
})
export class SurveyBoxComponent {

  @Input() model: ISurveyBox;
  @Input() minHeight = 550;

  @Output() requireInformation = new EventEmitter<ISurveyBox>();

  requireMoreInformation() {
    this.requireInformation.emit(this.model);
  }

  formatImageUrl(url: string) {
    return `url('${url}')`;
  }

}
