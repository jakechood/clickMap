import { TestBed } from '@angular/core/testing';

import { CountryLookupServiceService } from './country-lookup-service.service';

describe('CountryLookupServiceService', () => {
  let service: CountryLookupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryLookupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
