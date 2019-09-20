import { TestBed } from '@angular/core/testing';

import { TrialsService } from './trials.service';

describe('TrialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrialsService = TestBed.get(TrialsService);
    expect(service).toBeTruthy();
  });
});
