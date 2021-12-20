import { TestBed } from '@angular/core/testing';

import { ORingRectangularGlandExternalVacuumOnlyService } from './o-ring-rectangular-gland-external-vacuum-only.service';

describe('ORingRectangularGlandExternalVacuumOnlyService', () => {
  let service: ORingRectangularGlandExternalVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingRectangularGlandExternalVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
