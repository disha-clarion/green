import { TestBed } from '@angular/core/testing';

import { ControlBaseService } from './control-base.service';

describe('ControlBaseService', () => {
  let service: ControlBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
