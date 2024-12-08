import { TestBed } from '@angular/core/testing';

import { VariantDetailsService } from './variant-details.service';

describe('VariantDetailsService', () => {
  let service: VariantDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariantDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
