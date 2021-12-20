import { TestBed } from '@angular/core/testing';

import { ArWrPressInValidationService } from './ar-wr-press-in-validation.service';

describe('ArWrPressInValidationService', () => {
  let service: ArWrPressInValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArWrPressInValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
