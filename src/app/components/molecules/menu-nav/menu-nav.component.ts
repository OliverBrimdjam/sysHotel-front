import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  homeIcon = 'home';
  homeUrl = '/';
  historyIcon = 'history';
  historyUrl = '/history';
  chartIcon = 'insert_chart';
  chartUrl = '/chart';
  addIcon = 'add';

  ordersIcon = 'room_service';
  ordersUrl = '/orders';


  constructor() { }

  ngOnInit(): void {
  }

}
