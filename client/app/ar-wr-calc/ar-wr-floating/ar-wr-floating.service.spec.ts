import { TestBed } from '@angular/core/testing';

import { ArWrFloatingService } from './ar-wr-floating.service';

describe('ArWrFloatingService', () => {
  let service: ArWrFloatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArWrFloatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
