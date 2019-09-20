import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerImage = new BehaviorSubject<string>(undefined);

  setHeaderImage(url: string) {
    this.headerImage.next(url ? `url(${url})` : undefined);
  }
}
