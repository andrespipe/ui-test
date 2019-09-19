import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisLikeSquareComponent } from './dis-like-square.component';

describe('DisLikeSquareComponent', () => {
  let component: DisLikeSquareComponent;
  let fixture: ComponentFixture<DisLikeSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisLikeSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisLikeSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
