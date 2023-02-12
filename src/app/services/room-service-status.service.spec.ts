import { TestBed } from '@angular/core/testing';

import { RoomServiceStatusService } from './room-service-status.service';

describe('RoomServiceStatusService', () => {
  let service: RoomServiceStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomServiceStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
