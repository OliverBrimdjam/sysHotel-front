import { TestBed } from '@angular/core/testing';

import { RoomTypeStateService } from './room-type-state.service';

describe('RoomTypeStateService', () => {
  let service: RoomTypeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomTypeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
