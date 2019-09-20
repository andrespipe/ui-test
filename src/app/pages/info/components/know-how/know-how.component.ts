import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { IStepCard } from '../../models/know-how.model';

@Component({
  selector: 'test-know-how',
  templateUrl: './know-how.component.html',
  styleUrls: ['./know-how.component.scss']
})
export class KnowHowComponent implements OnInit {

  steps: IStepCard[] = [
    {
      image: '/assets/img/a-min.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      title: 'Vote and speak out'
    },
    {
      image: '/assets/img/b-min.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      title: 'See reports'
    },
    {
      image: '/assets/img/c-min.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      title: 'Share with friends'
    },
  ];

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.setHeaderImage('/assets/img/info-min.png');
  }

}
