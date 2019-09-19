import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { UiControlsModule } from 'src/app/modules/ui-controls/ui-controls.module';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiControlsModule,
  ],
  providers: [
    HomeService,
  ],
})
export class HomeModule { }
