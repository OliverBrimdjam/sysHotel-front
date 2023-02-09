import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-screen',
  templateUrl: './guest-screen.component.html',
  styleUrls: ['./guest-screen.component.scss']
})
export class GuestScreenComponent implements OnInit {
  guestStatusList: any[] = [
    { nome: 'Reserved', color: 'primary', disabled: false },
    { nome: 'Checked In', color: 'primary', disabled: false },
    { nome: 'Checked Out', color: 'primary', disabled: false },
    { nome: 'Canceled', color: 'primary', disabled: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
