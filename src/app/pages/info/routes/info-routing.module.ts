import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowHowComponent } from '../components/know-how/know-how.component';

const routes: Routes = [
  { path: '', component: KnowHowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
