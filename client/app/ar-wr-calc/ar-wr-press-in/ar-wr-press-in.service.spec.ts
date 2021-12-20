import { TestBed } from '@angular/core/testing';

import { ArWrPressInService } from './ar-wr-press-in.service';

describe('ArWrPressInService', () => {
  let service: ArWrPressInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArWrPressInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
