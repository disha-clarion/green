import { TestBed } from '@angular/core/testing';

import { UnitButtonService } from './unit-button.service';

describe('UnitButtonService', () => {
  let service: UnitButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
