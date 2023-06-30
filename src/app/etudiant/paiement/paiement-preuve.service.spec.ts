import { TestBed } from '@angular/core/testing';

import { PaiementPreuveService } from './paiement-preuve.service';

describe('PaiementPreuveService', () => {
  let service: PaiementPreuveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementPreuveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
