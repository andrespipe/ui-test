import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-dis-like-square',
  templateUrl: './dis-like-square.component.html',
  styleUrls: ['./dis-like-square.component.scss']
})
export class DisLikeSquareComponent implements OnInit {

  @Input() isLike = true;

  constructor() { }

  ngOnInit() {
  }

}
