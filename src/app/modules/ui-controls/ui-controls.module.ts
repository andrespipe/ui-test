import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyBoxComponent } from './components/survey-box/survey-box.component';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { DisLikeButtonsComponent } from './components/dis-like-buttons/dis-like-buttons.component';
import { SubmitNameComponent } from './components/submit-name/submit-name.component';
import { DisLikeSquareComponent } from './components/dis-like-square/dis-like-square.component';

const components = [
  DisLikeButtonsComponent,
  DisLikeSquareComponent,
  PercentageBarComponent,
  SubmitNameComponent,
  SurveyBoxComponent,
];
@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class UiControlsModule { }
