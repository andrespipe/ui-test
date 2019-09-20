import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { IHomePage } from '../../models/home-page.model';
import { HomeService } from '../../services/home.service';
import { ISurveyBox } from 'src/app/modules/ui-controls/models/survey-box.model';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/models/routes.model';
import { TrialsService } from 'src/app/services/trials.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageInfo: IHomePage;

  constructor(
    private headerService: HeaderService,
    private homeService: HomeService,
    private trialsService: TrialsService,
    ) { }

  ngOnInit() {
    this.homeService
        .homePage
        .subscribe(pageInfo => this.handlePageInfo(pageInfo));
  }

  handlePageInfo(pageInfo: IHomePage) {
    this.pageInfo = JSON.parse(JSON.stringify(pageInfo));
    this.headerService.setHeaderImage(this.pageInfo.headerImage);
  }

  handleInfoRequirement(trial: ISurveyBox) {
    this.trialsService.loadTrial(trial);
  }

}
