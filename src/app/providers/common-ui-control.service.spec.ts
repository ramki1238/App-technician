import { TestBed } from '@angular/core/testing';

import { CommonUiControlService } from './common-ui-control.service';

describe('CommonUiControlService', () => {
  let service: CommonUiControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonUiControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
