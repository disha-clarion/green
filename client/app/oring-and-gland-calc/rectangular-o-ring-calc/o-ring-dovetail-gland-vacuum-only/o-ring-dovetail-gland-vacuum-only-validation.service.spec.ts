import { TestBed } from '@angular/core/testing';

import { ORingDovetailGlandVacuumOnlyValidationService } from './o-ring-dovetail-gland-vacuum-only-validation.service';

describe('ORingDovetailGlandVacuumOnlyValidationService', () => {
  let service: ORingDovetailGlandVacuumOnlyValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingDovetailGlandVacuumOnlyValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
