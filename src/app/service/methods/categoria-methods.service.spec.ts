import { TestBed, inject } from '@angular/core/testing';

import { CategoriaMethodsService } from './categoria-methods.service';

describe('CategoriaMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaMethodsService]
    });
  });

  it('should be created', inject([CategoriaMethodsService], (service: CategoriaMethodsService) => {
    expect(service).toBeTruthy();
  }));
});
