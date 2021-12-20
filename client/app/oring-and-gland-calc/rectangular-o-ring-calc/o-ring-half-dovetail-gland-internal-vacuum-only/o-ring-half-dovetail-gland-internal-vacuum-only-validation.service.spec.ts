import { TestBed } from '@angular/core/testing';

import { ORingHalfDovetailGlandInternalVacuumOnlyValidationService } from './o-ring-half-dovetail-gland-internal-vacuum-only-validation.service';

describe('ORingHalfDovetailGlandInternalVacuumOnlyValidationService', () => {
  let service: ORingHalfDovetailGlandInternalVacuumOnlyValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingHalfDovetailGlandInternalVacuumOnlyValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
