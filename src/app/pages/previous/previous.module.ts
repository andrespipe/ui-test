import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousComponent } from './components/previous/previous.component';
import { PreviousRoutingModule } from './routes/previous.routing.module';
import { UiControlsModule } from 'src/app/modules/ui-controls/ui-controls.module';
import { SurveyDetailComponent } from './components/survey-detail/survey-detail.component';
import { PreviousLandingComponent } from './components/previous-landing/previous-landing.component';

@NgModule({
  declarations: [PreviousComponent, SurveyDetailComponent, PreviousLandingComponent],
  imports: [
    CommonModule,
    PreviousRoutingModule,
    UiControlsModule,
  ]
})
export class PreviousModule { }
