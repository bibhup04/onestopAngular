import { TestBed } from '@angular/core/testing';

import { UserFamilyService } from './user-family.service';

describe('UserFamilyService', () => {
  let service: UserFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
