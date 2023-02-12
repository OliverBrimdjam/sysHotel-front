import { TestBed } from '@angular/core/testing';

import { RoomServiceStatusStateService } from './room-service-status-state.service';

describe('RoomServiceStatusStateService', () => {
  let service: RoomServiceStatusStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomServiceStatusStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
