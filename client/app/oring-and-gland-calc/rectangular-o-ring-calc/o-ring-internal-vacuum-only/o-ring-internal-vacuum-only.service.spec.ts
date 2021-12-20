import { TestBed } from '@angular/core/testing';

import { ORingInternalVacuumOnlyService } from './o-ring-internal-vacuum-only.service';

describe('ORingInternalVacuumOnlyService', () => {
  let service: ORingInternalVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingInternalVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
