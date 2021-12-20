import { TestBed } from '@angular/core/testing';

import { DynamicFormTwoColumnLayoutService } from './dynamic-form-two-column-layout.service';

describe('DynamicFormTwoColumnLayoutService', () => {
  let service: DynamicFormTwoColumnLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormTwoColumnLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
