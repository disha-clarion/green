import { TestBed } from '@angular/core/testing';

import { DashSizeDetailsService } from './dash-size-details.service';

describe('DashSizeDetailsService', () => {
  let service: DashSizeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashSizeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
