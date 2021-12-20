import { TestBed } from '@angular/core/testing';

import { ArWrFloatingValidationService } from './ar-wr-floating-validation.service';

describe('ArWrFloatingValidationService', () => {
  let service: ArWrFloatingValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArWrFloatingValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
