import { TestBed } from '@angular/core/testing';

import { ORingRectangularGlandExternalVacuumOnlyValidationService } from './o-ring-rectangular-gland-external-vacuum-only-validation.service';

describe('ORingRectangularGlandExternalVacuumOnlyValidationService', () => {
  let service: ORingRectangularGlandExternalVacuumOnlyValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingRectangularGlandExternalVacuumOnlyValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
