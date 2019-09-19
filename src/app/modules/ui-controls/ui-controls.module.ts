import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyBoxComponent } from './components/survey-box/survey-box.component';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { DisLikeButtonsComponent } from './components/dis-like-buttons/dis-like-buttons.component';

const components = [
  DisLikeButtonsComponent,
  PercentageBarComponent,
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
