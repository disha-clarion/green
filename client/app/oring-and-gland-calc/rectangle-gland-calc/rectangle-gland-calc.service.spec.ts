import { TestBed } from '@angular/core/testing';

import { RectangleGlandCalcService } from './rectangle-gland-calc.service';

describe('RectangleGlandCalcService', () => {
  let service: RectangleGlandCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RectangleGlandCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
