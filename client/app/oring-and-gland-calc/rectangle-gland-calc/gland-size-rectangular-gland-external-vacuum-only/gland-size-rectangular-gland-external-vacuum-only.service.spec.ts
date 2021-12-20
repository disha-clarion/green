import { TestBed } from '@angular/core/testing';

import { GlandSizeRectangularGlandExternalVacuumOnlyService } from './gland-size-rectangular-gland-external-vacuum-only.service';

describe('GlandSizeRectangularGlandExternalVacuumOnlyService', () => {
  let service: GlandSizeRectangularGlandExternalVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlandSizeRectangularGlandExternalVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
