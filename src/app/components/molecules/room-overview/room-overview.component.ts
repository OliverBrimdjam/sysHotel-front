import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-overview',
  templateUrl: './room-overview.component.html',
  styleUrls: ['./room-overview.component.scss']
})
export class RoomOverviewComponent implements OnInit {
  @Input() roomCollection = []

  constructor() { }

  ngOnInit(): void {
  }

}
