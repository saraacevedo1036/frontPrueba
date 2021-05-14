import { TestBed } from '@angular/core/testing';

import { ParqueaderoServicioService } from './parqueadero-servicio.service';

describe('ParqueaderoServicioService', () => {
  let service: ParqueaderoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParqueaderoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
