import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TRoomHistory } from '../types/TRoomHistory';
import { RoomHistoryService } from '../services/room-history.service';

@Injectable({
  providedIn: 'root'
})
export class RoomHistoryStateService {
  private roomHistoryState = new BehaviorSubject<TRoomHistory[]>([]);

  constructor(private roomHistoryService: RoomHistoryService) {
    this.sync();
  }

  ngOnInit() {
  }

  getRoomHistoryState() {
    return this.roomHistoryState.asObservable();
  }

  sync() {
    this.roomHistoryService.get().subscribe(roomHistory => this.roomHistoryState.next(roomHistory));
  }
}
