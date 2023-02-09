import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

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
  guestIcon = 'person';
  guestsUrl = '/guests';
  addIcon = 'add';
  ordersIcon = 'room_service';
  ordersUrl = '/orders';
  addButtonOptions = [
    { content: 'Add Reserve', icon: 'calendar_today'},
    { content: 'Add Order', icon: 'room_service'},
    { content: 'Add Guest', icon: 'person'},
    { content: 'Add Room', icon: 'meeting_room'}
  ]
  showAddOptions = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

  toggleAddOptions() {
    this.showAddOptions = !this.showAddOptions;
  }

}
