import { TestBed } from '@angular/core/testing';

import { GlandSizeDovetailGlandVacuumOnlyService } from './gland-size-dovetail-gland-vacuum-only.service';

describe('GlandSizeDovetailGlandVacuumOnlyService', () => {
  let service: GlandSizeDovetailGlandVacuumOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlandSizeDovetailGlandVacuumOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
