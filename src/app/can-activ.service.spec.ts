import { TestBed } from '@angular/core/testing';

import { CanActivService } from './can-activ.service';

describe('CanActivService', () => {
  let service: CanActivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
