import { TestBed } from '@angular/core/testing';

import { RectangularORingCalcService } from './rectangular-o-ring-calc.service';

describe('RectangularORingCalcService', () => {
  let service: RectangularORingCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RectangularORingCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
