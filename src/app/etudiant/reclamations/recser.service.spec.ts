import { TestBed } from '@angular/core/testing';

import { RecserService } from './recser.service';

describe('RecserService', () => {
  let service: RecserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
