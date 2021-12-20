import { TestBed } from '@angular/core/testing';

import { ArWrDropDownDataService } from './ar-wr-drop-down-data.service';

describe('ArWrDropDownDataService', () => {
  let service: ArWrDropDownDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArWrDropDownDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
