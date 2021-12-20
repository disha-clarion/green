import { TestBed } from '@angular/core/testing';

import { GlandSizeRectangleInternalVacuumOnlyService } from './gland-size-rectangle-internal-vacuum-only.service';

describe('GlandSizeRectangleInternalVacuumOnlyService', () => {
  let service: GlandSizeRectangleInternalVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlandSizeRectangleInternalVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
