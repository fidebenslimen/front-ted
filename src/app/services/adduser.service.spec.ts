import { TestBed } from '@angular/core/testing';

import { AdduserService } from './adduser.service';

describe('AdduserService', () => {
  let service: AdduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
