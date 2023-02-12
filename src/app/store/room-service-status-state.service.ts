import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TRoomServiceStatus } from '../types/TRoomServiceStatus';
import { RoomServiceStatusService } from '../services/room-service-status.service';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceStatusStateService {
  private roomServiceStatusState = new BehaviorSubject<TRoomServiceStatus[]>([]);

  constructor(private roomServiceStatusService: RoomServiceStatusService) {
    this.sync();
  }

  ngOnInit() {
    // this.sync();
  }

  getRoomServiceStatusState() {
    return this.roomServiceStatusState.asObservable();
  }

  sync() {
    this.roomServiceStatusService.get().subscribe(roomServiceStatus => this.roomServiceStatusState.next(roomServiceStatus));
  }

  add(roomServiceStatus: TRoomServiceStatus) {
    this.roomServiceStatusService.create(roomServiceStatus);
    this.sync();
  }

  remove(roomServiceStatusId: number) {
    this.roomServiceStatusService.delete(roomServiceStatusId);
    this.sync();
  }

  update(roomServiceStatus: TRoomServiceStatus) {
    this.roomServiceStatusService.update(roomServiceStatus);
    this.sync();
  }
}
