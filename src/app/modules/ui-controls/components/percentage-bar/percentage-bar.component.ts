import { Component, OnInit, Input } from '@angular/core';
import { IVoteModel } from '../../models/survey-box.model';

@Component({
  selector: 'test-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss']
})
export class PercentageBarComponent implements OnInit {

  @Input() model: IVoteModel;
  @Input() height = 35;

  constructor() { }

  ngOnInit() {
  }

}
