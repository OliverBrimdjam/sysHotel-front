import { Injectable } from '@angular/core';
import { RoomStatusService } from '../services/room-status.service';
import { TRoomStatus } from '../types/TRoomStatus';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomStatusStateService {
private roomStatusState = new BehaviorSubject<TRoomStatus[]>([]);

  constructor(private roomStatusService: RoomStatusService) {
    this.sync();
  }

  ngOnInit() {
    // this.sync();
  }

  getRoomStatusState() {
    return this.roomStatusState.asObservable();
  }

  sync() {
    this.roomStatusService.get().subscribe(roomStatus => this.roomStatusState.next(roomStatus));
  }

  add(roomStatus: TRoomStatus) {
    this.roomStatusService.create(roomStatus);
    this.sync();
  }

  remove(roomStatusId: number) {
    this.roomStatusService.delete(roomStatusId);
    this.sync();
  }

  update(roomStatus: TRoomStatus) {
    this.roomStatusService.update(roomStatus);
    this.sync();
  }
}
