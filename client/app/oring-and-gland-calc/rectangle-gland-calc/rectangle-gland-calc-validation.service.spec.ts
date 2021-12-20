import { TestBed } from '@angular/core/testing';

import { RectangleGlandCalcValidationService } from './rectangle-gland-calc-validation.service';

describe('RectangleGlandCalcValidationService', () => {
  let service: RectangleGlandCalcValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RectangleGlandCalcValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
