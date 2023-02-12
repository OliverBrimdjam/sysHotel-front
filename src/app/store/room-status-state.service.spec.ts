import { TestBed } from '@angular/core/testing';

import { RoomStatusStateService } from './room-status-state.service';

describe('RoomStatusStateService', () => {
  let service: RoomStatusStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomStatusStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
