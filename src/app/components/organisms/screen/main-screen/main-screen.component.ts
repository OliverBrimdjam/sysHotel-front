import { Component, OnInit } from '@angular/core';
import { RoomTypeStateService } from 'src/app/store/room-type-state.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  roomTypeList: any[] = [];
  roomsList: any[] = [];
  reservesStatusList: any[]= [
    { name: 'Reserved', color: 'primary', disabled: false },
    { name: 'Checked In', color: 'primary', disabled: false },
    { name: 'Checked Out', color: 'primary', disabled: false },
    { name: 'Canceled', color: 'primary', disabled: false },
  ]

  constructor(
    private roomTypeState: RoomTypeStateService,
  ) { }

  ngOnInit(): void {
    this.getRoomTypesList();
  }

  getRoomTypesList() {
    this.roomTypeState.getRoomType().subscribe(roomTypes => {
      this.roomTypeList = roomTypes.map((room) => {
        return { name: room.name, color: 'primary', disabled: false }
      });
    });
  }
}
