import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TRoomService } from '../types/TRoomService';
import { RoomServiceService } from '../services/room-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceStateService {
  private roomServiceState = new BehaviorSubject<TRoomService[]>([]);

  constructor(private roomServiceService: RoomServiceService) {
    this.sync();
  }

  ngOnInit() {
  }

  getRoomServiceState() {
    return this.roomServiceState.asObservable();
  }

  sync() {
    this.roomServiceService.get().subscribe(roomService => this.roomServiceState.next(roomService));
  }

  add(roomService: TRoomService) {
    this.roomServiceService.create(roomService);
    this.sync();
  }

  remove(roomServiceId: number) {
    this.roomServiceService.delete(roomServiceId);
    this.sync();
  }

  update(roomService: TRoomService) {
    this.roomServiceService.update(roomService);
    this.sync();
  }
}
