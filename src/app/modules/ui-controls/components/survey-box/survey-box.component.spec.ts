import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyBoxComponent } from './survey-box.component';

describe('SurveyBoxComponent', () => {
  let component: SurveyBoxComponent;
  let fixture: ComponentFixture<SurveyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
