import { TestBed } from '@angular/core/testing';

import { RoomServiceStateService } from './room-service-state.service';

describe('RoomServiceStateService', () => {
  let service: RoomServiceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomServiceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
