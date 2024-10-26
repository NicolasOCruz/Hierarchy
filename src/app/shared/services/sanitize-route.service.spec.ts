import { TestBed } from '@angular/core/testing';

import { SanitizeRouteService } from './sanitize-route.service';

describe('SanitizeRouteService', () => {
  let service: SanitizeRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanitizeRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
