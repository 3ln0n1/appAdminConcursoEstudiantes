import { TestBed } from '@angular/core/testing';

import { SeminarioService } from './seminario.service';

describe('SeminarioService', () => {
  let service: SeminarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeminarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
