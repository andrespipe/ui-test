import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowHowComponent } from './components/know-how/know-how.component';
import { InfoRoutingModule } from './routes/info-routing.module';

@NgModule({
  declarations: [KnowHowComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
  ]
})
export class InfoModule { }
