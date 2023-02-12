import { TestBed } from '@angular/core/testing';

import { ReservationStatusStateService } from './reservation-status-state.service';

describe('ReservationStatusStateService', () => {
  let service: ReservationStatusStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationStatusStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
