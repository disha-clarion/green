import { TestBed } from '@angular/core/testing';

import { GlandSizeHalfDovetailGlandInternalVacuumOnlyService } from './gland-size-half-dovetail-gland-internal-vacuum-only.service';

describe('GlandSizeHalfDovetailGlandInternalVacuumOnlyService', () => {
  let service: GlandSizeHalfDovetailGlandInternalVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlandSizeHalfDovetailGlandInternalVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
