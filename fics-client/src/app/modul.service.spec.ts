import { TestBed } from '@angular/core/testing';

import { ModulService } from './modul.service';

describe('ModulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModulService = TestBed.get(ModulService);
    expect(service).toBeTruthy();
  });
});
