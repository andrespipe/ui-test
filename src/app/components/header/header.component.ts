import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'test-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerImgUrl: string;
  unsubscribe = new Subject();

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.loadImage();
  }

  loadImage() {
    this.headerService
      .headerImage
      .pipe(
        filter(image => image !== null),
        takeUntil(this.unsubscribe),
      )
      .subscribe(imgUrl => this.setHeaderImage(imgUrl));
  }

  setHeaderImage(imgUrl: string) {
    this.headerImgUrl = imgUrl;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
