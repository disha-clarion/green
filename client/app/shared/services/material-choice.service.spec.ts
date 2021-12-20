import { TestBed } from '@angular/core/testing';

import { MaterialChoiceService } from './material-choice.service';

describe('MaterialChoiceService', () => {
  let service: MaterialChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
