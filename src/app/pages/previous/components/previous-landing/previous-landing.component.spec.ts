import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousLandingComponent } from './previous-landing.component';

describe('PreviousLandingComponent', () => {
  let component: PreviousLandingComponent;
  let fixture: ComponentFixture<PreviousLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
