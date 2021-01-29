import { TestBed } from '@angular/core/testing';

import { ItemProvidersService } from './item-providers.service';

describe('ItemProvidersService', () => {
  let service: ItemProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
