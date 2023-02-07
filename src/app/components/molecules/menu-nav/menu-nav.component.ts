import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  homeIcon = 'home';
  historyIcon = 'history';
  chartIcon = 'insert_chart';
  addIcon = 'add';
  ordersIcon = 'rom_service';
  hotelIcon = 'hotel';


  constructor() { }

  ngOnInit(): void {
  }

}
