import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviousComponent } from '../components/previous/previous.component';
import { SurveyDetailComponent } from '../components/survey-detail/survey-detail.component';
import { PreviousLandingComponent } from '../components/previous-landing/previous-landing.component';

const routes: Routes = [
  { path: '', component: PreviousLandingComponent },
  { path: ':category', component: PreviousComponent },
  { path: ':category/:surveyId/:title', component: SurveyDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PreviousRoutingModule {}
