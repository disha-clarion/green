import { TestBed } from '@angular/core/testing';

import { TemperatureButtonService } from './temperature-button.service';

describe('TemperatureButtonService', () => {
  let service: TemperatureButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
