import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RoomHistoryStateService } from 'src/app/store/room-history-state.service';

@Component({
  selector: 'app-table-chart-overview',
  templateUrl: './table-chart-overview.component.html',
  styleUrls: ['./table-chart-overview.component.scss']
})
export class TableChartOverviewComponent implements OnInit {
  collection: any[] | undefined = []
  displayedColumns: string[] = ['id', 'lastChange', 'roomId', 'roomStatusId'];
  dataSource!: MatTableDataSource<any>;
  filterFormControl = new FormControl('');


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private roomHistoryStateService: RoomHistoryStateService) {}

  ngOnInit(): void {

    this.getRoomHistoryList();
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

  getRoomHistoryList() {
    this.roomHistoryStateService.getRoomHistoryState().subscribe(roomHistory => {
      this.collection = roomHistory.map((roomEvent) => {
        return { id: roomEvent.id, lastChange: roomEvent.lastChange, roomId: roomEvent.roomId, roomStatusId: roomEvent.roomStatusId }
      });
      this.dataSource = new MatTableDataSource(this.collection);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
