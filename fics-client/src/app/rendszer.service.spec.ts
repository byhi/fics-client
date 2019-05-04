import { TestBed } from '@angular/core/testing';

import { RendszerService } from './rendszer.service';

describe('RendszerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendszerService = TestBed.get(RendszerService);
    expect(service).toBeTruthy();
  });
});
