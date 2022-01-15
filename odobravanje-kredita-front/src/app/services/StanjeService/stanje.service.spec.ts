import { TestBed } from '@angular/core/testing';

import { StanjeService } from './stanje.service';

describe('StanjeService', () => {
  let service: StanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
