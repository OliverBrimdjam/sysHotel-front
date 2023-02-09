import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-screen',
  templateUrl: './chart-screen.component.html',
  styleUrls: ['./chart-screen.component.scss']
})
export class ChartScreenComponent implements OnInit {
  roomsStatusList: any[] = [
    { nome: 'Available', color: 'primary', disabled: false },
    { nome: 'Occupied', color: 'primary', disabled: false },
    { nome: 'Reserved', color: 'primary', disabled: false },
    { nome: 'Out of order', color: 'primary', disabled: false },
    { nome: 'Maintenance', color: 'primary', disabled: false },
    { nome: 'Cleaning', color: 'primary', disabled: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
