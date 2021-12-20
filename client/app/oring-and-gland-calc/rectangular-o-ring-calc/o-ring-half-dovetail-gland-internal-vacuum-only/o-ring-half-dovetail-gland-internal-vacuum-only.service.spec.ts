import { TestBed } from '@angular/core/testing';

import { ORingHalfDovetailGlandInternalVacuumOnlyService } from './o-ring-half-dovetail-gland-internal-vacuum-only.service';

describe('ORingHalfDovetailGlandInternalVacuumOnlyService', () => {
  let service: ORingHalfDovetailGlandInternalVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingHalfDovetailGlandInternalVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
