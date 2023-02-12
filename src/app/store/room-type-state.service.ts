import { Injectable, OnInit } from '@angular/core';
import { TRoomType } from '../types/TRoomType';
import { BehaviorSubject } from 'rxjs';
import { RoomTypeService } from '../services/room-type.service';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeStateService {
  private roomTypeState = new BehaviorSubject<TRoomType[]>([]);

  constructor(private roomTypes: RoomTypeService) {
    this.sync();
  }

  ngOnInit() {
    // this.sync();
  }

  getRoomType() {
    return this.roomTypeState.asObservable();
  }

  sync() {
    this.roomTypes.get().subscribe(roomType => this.roomTypeState.next(roomType));
  }

  add(roomType: TRoomType) {
    this.roomTypes.create(roomType);
    this.sync();
  }

  remove(roomTypeId: number) {
    this.roomTypes.delete(roomTypeId);
    this.sync();
  }

  update(roomType: TRoomType) {
    this.roomTypes.update(roomType);
    this.sync();
  }
}
