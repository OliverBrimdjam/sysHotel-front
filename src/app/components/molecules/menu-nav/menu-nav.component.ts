import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from "@angular/router"
import { DialogAddReserveComponent } from '../dialog-add-reserve/dialog-add-reserve.component';
import { ComponentType } from '@angular/cdk/portal';
import { DialogAddRoomComponent } from '../dialog-add-room/dialog-add-room.component';
import { DialogAddGuestComponent } from '../dialog-add-guest/dialog-add-guest.component';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
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
    { content: 'Add Reserve', icon: 'calendar_today', action: () => this.openAddDialog(DialogAddReserveComponent)},
    { content: 'Add Order', icon: 'room_service', action: () => this.openAddDialog(DialogAddOrderComponent)},
    { content: 'Add Guest', icon: 'person', action: () => this.openAddDialog(DialogAddGuestComponent)},
    { content: 'Add Room', icon: 'meeting_room', action: () => this.openAddDialog(DialogAddRoomComponent)}
  ]
  showAddOptions = false;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }

  openAddDialog(component: ComponentType<unknown>) {
    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
