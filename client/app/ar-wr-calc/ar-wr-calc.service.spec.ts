import { TestBed } from '@angular/core/testing';

import { ArWrCalcService } from './ar-wr-calc.service';

describe('ArWrCalcService', () => {
  let service: ArWrCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArWrCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
