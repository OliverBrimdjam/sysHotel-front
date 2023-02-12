import { TestBed } from '@angular/core/testing';

import { RoomHistoryStateService } from './room-history-state.service';

describe('RoomHistoryStateService', () => {
  let service: RoomHistoryStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomHistoryStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
