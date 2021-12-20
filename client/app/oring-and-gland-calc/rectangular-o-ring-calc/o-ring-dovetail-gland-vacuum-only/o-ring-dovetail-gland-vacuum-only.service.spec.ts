import { TestBed } from '@angular/core/testing';

import { ORingDovetailGlandVacuumOnlyService } from './o-ring-dovetail-gland-vacuum-only.service';

describe('ORingDovetailGlandVacuumOnlyService', () => {
  let service: ORingDovetailGlandVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ORingDovetailGlandVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
