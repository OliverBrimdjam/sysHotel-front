import { Injectable, OnInit } from '@angular/core';
import { TRoom } from '../types/TRoom';
import { BehaviorSubject } from 'rxjs';
import { RoomService } from '../services/room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStateService {
private roomState = new BehaviorSubject<TRoom[]>([]);

  constructor(private roomService: RoomService) {
    this.sync();
  }

  ngOnInit() {
    // this.sync();
  }

  getRoomState() {
    return this.roomState.asObservable();
  }

  sync() {
    this.roomService.get().subscribe(room => this.roomState.next(room));
  }

  add(room: TRoom) {
    this.roomService.create(room);

    this.sync();
  }

  remove(roomId: number) {
    this.roomService.delete(roomId);
    this.sync();
  }

  update(room: TRoom) {
    this.roomService.update(room);
    this.sync();
  }
}
