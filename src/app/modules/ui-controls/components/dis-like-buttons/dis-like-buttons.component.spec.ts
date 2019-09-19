import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisLikeButtonsComponent } from './dis-like-buttons.component';

describe('DisLikeButtonsComponent', () => {
  let component: DisLikeButtonsComponent;
  let fixture: ComponentFixture<DisLikeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisLikeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisLikeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
