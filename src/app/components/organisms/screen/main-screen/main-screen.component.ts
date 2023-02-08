import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  roomStatusList: any[] = [
    { nome: 'Available', color: 'primary', disabled: false },
    { nome: 'Occupied', color: 'primary', disabled: false },
    { nome: 'Reserved', color: 'primary', disabled: false },
    { nome: 'Out of Order', color: 'primary', disabled: false },
    { nome: 'Maintenance', color: 'primary', disabled: false },
    { nome: 'cleaning', color: 'primary', disabled: false },
  ]
  reservesStatusList: any[] = [
    { nome: 'Reserved', color: 'primary', disabled: false },
    { nome: 'Checked In', color: 'primary', disabled: false },
    { nome: 'Checked Out', color: 'primary', disabled: false },
    { nome: 'Canceled', color: 'primary', disabled: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
