import { TestBed } from '@angular/core/testing';

import { UserManagmentService } from './user-managment.service';

describe('UserManagmentService', () => {
  let service: UserManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
