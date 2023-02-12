import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationStateService } from 'src/app/store/reservation-state.service';

@Component({
  selector: 'app-table-reserves-overview',
  templateUrl: './table-reserves-overview.component.html',
  styleUrls: ['./table-reserves-overview.component.scss']
})
export class TableReservesOverviewComponent implements OnInit {
  collection: any[] | undefined = []
  displayedColumns: string[] = ['id', 'status', 'start', 'checkIn'];
  dataSource!: MatTableDataSource<any>;
  filterFormControl = new FormControl('');


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private reservationStateService: ReservationStateService) {}

  ngOnInit(): void {

    this.getRoomsList();
    console.log('no onInit da table-room-overview', this.collection);
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
    this.reservationStateService.getReservationState().subscribe(reservations => {
      this.collection = reservations.map((reservation) => {
        return { id: reservation.id, reservationStatus: reservation.reservationStatusId, reserveStart: reservation.reserveStart, checkIn: reservation.checkIn }
      });
      this.dataSource = new MatTableDataSource(this.collection);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
