import { TestBed } from '@angular/core/testing';

import { CalculatorToolbarService } from './calculator-toolbar.service';

describe('CalculatorToolbarService', () => {
  let service: CalculatorToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
