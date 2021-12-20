import { TestBed } from '@angular/core/testing';

import { ORingInternalVacuumOnlyValidationService } from './o-ring-internal-vacuum-only-validation.service';

describe('ORingInternalVacuumOnlyValidationService', () => {
  let service: ORingInternalVacuumOnlyValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingInternalVacuumOnlyValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
