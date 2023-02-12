import { Component, OnInit,  ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RoomStateService } from 'src/app/store/room-state.service';

@Component({
  selector: 'app-table-room-overview',
  templateUrl: './table-room-overview.component.html',
  styleUrls: ['./table-room-overview.component.scss']
})
export class TableRoomOverviewComponent implements OnInit {
  roomCollection: any[] | undefined = []
  displayedColumns: string[] = ['Name', 'Status', 'Type'];
  dataSource!: MatTableDataSource<any>;
  filterFormControl = new FormControl('');


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private roomState: RoomStateService) {}

  ngOnInit(): void {

    this.getRoomsList();
    console.log('no onInit da table-room-overview', this.roomCollection);
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRoomsList() {
    this.roomState.getRoomState().subscribe(rooms => {
      this.roomCollection = rooms.map((room) => {
        return { name: room.name, roomStatusId: room.roomStatusId, roomType: room.roomTypeId }
      });
      this.dataSource = new MatTableDataSource(this.roomCollection);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
