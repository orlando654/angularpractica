import { TestBed } from '@angular/core/testing';

import { PaísService } from './país.service';

describe('PaísService', () => {
  let service: PaísService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaísService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
